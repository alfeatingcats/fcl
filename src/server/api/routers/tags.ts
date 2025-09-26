// src/server/api/routers/tags.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { CreateTagSchema, UpdateTagSchema } from "@/shared/api/schemas";

export const tagsRouter = createTRPCRouter({
  /**
   * Create a new tag
   */
  create: protectedProcedure
    .input(CreateTagSchema)
    .mutation(async ({ ctx, input }) => {
      // Check if a tag with the same name already exists (globally)
      const existingTag = await ctx.db.tag.findFirst({
        where: {
          name: { equals: input.name, mode: "insensitive" },
        },
      });

      if (existingTag) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A tag with this name already exists",
        });
      }

      return await ctx.db.tag.create({
        data: {
          name: input.name.trim(),
          color: input.color,
        },
      });
    }),

  /**
   * Get all tags with usage statistics
   */
  getAll: protectedProcedure
    .input(
      z.object({
        search: z.string().optional(),
        sortBy: z.enum(["name", "usage", "created"]).default("usage"),
        includeUnused: z.boolean().default(true),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { search, sortBy, includeUnused } = input;
      const userId = ctx.session.user.id;

      // Base query
      const where: Record<string, unknown> = {};

      if (search) {
        where.name = {
          contains: search,
          mode: "insensitive",
        };
      }

      // Exclude unused tags if needed
      if (!includeUnused) {
        where.itemTags = {
          some: {
            studyItem: {
              createdById: userId,
            },
          },
        };
      }

      const tags = await ctx.db.tag.findMany({
        where,
        include: {
          _count: {
            select: {
              itemTags: {
                where: {
                  studyItem: {
                    createdById: userId, // Count only usage by current user
                  },
                },
              },
            },
          },
          itemTags: {
            where: {
              studyItem: {
                createdById: userId,
                status: { not: "ARCHIVED" },
              },
            },
            include: {
              studyItem: {
                select: {
                  status: true,
                  createdAt: true,
                },
              },
            },
            take: 3, // For preview of recent notes
          },
        },
      });

      // Sorting
      const sortedTags = tags.sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "usage":
            return b._count.itemTags - a._count.itemTags;
          case "created":
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          default:
            return 0;
        }
      });

      return sortedTags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        color: tag.color,
        createdAt: tag.createdAt,
        usageCount: tag._count.itemTags,
        recentItems: tag.itemTags.map((it) => ({
          id: it.studyItemId,
          status: it.studyItem.status,
          createdAt: it.studyItem.createdAt,
        })),
      }));
    }),

  /**
   * Get popular/recommended tags
   */
  getPopular: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(20).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.tag.findMany({
        take: input.limit,
        orderBy: {
          itemTags: {
            _count: "desc",
          },
        },
        include: {
          _count: {
            select: { itemTags: true },
          },
        },
        where: {
          itemTags: {
            some: {}, // Only tags that have been used at least once
          },
        },
      });
    }),

  /**
   * Search for tags with autocomplete
   */
  searchForAutocomplete: protectedProcedure
    .input(
      z.object({
        query: z.string().min(1).max(50),
        limit: z.number().min(1).max(10).default(5),
        excludeIds: z.array(z.string().cuid()).optional().default([]),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.tag.findMany({
        where: {
          name: {
            contains: input.query,
            mode: "insensitive",
          },
          id: {
            notIn: input.excludeIds,
          },
        },
        take: input.limit,
        orderBy: [
          { itemTags: { _count: "desc" } }, // Popular first
          { name: "asc" }, // Then alphabetically
        ],
        select: {
          id: true,
          name: true,
          color: true,
          _count: {
            select: { itemTags: true },
          },
        },
      });
    }),

  /**
   * Update tag
   */
  update: protectedProcedure
    .input(UpdateTagSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;

      // Check if tag exists
      const existingTag = await ctx.db.tag.findUnique({
        where: { id },
      });

      if (!existingTag) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Tag not found",
        });
      }

      // If name is being changed, check for uniqueness
      if (updateData.name && updateData.name !== existingTag.name) {
        const duplicateTag = await ctx.db.tag.findFirst({
          where: {
            name: { equals: updateData.name, mode: "insensitive" },
            id: { not: id },
          },
        });

        if (duplicateTag) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "A tag with this name already exists",
          });
        }
      }

      return await ctx.db.tag.update({
        where: { id },
        data: updateData,
      });
    }),

  /**
   * Delete tag
   */
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        transferToTagId: z.string().cuid().optional(), // Transfer relations to another tag
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        // Check if tag exists
        const tag = await tx.tag.findUnique({
          where: { id: input.id },
          include: {
            _count: { select: { itemTags: true } },
          },
        });

        if (!tag) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Tag not found",
          });
        }

        // If a transfer target is provided
        if (input.transferToTagId) {
          const targetTag = await tx.tag.findUnique({
            where: { id: input.transferToTagId },
          });

          if (!targetTag) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "Target tag for transfer not found",
            });
          }

          // Transfer all relations to the new tag
          const itemTags = await tx.studyItemTag.findMany({
            where: { tagId: input.id },
          });

          for (const itemTag of itemTags) {
            // Check if a relation with the target tag already exists
            const existingConnection = await tx.studyItemTag.findUnique({
              where: {
                studyItemId_tagId: {
                  studyItemId: itemTag.studyItemId,
                  tagId: input.transferToTagId,
                },
              },
            });

            if (!existingConnection) {
              await tx.studyItemTag.create({
                data: {
                  studyItemId: itemTag.studyItemId,
                  tagId: input.transferToTagId,
                },
              });
            }
          }
        }

        // Delete the tag (connections will be deleted via onDelete: Cascade)
        await tx.tag.delete({
          where: { id: input.id },
        });

        return {
          deletedTag: tag,
          transferredConnections: input.transferToTagId
            ? tag._count.itemTags
            : 0,
        };
      });
    }),

  /**
   * Get user tag statistics
   */
  getUserTagStats: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    // Total tags used by user
    const totalTags = await ctx.db.tag.count({
      where: {
        itemTags: {
          some: {
            studyItem: { createdById: userId },
          },
        },
      },
    });

    // Most popular tags of user
    const topTags = await ctx.db.tag.findMany({
      where: {
        itemTags: {
          some: {
            studyItem: { createdById: userId },
          },
        },
      },
      take: 5,
      orderBy: {
        itemTags: { _count: "desc" },
      },
      include: {
        _count: {
          select: {
            itemTags: {
              where: {
                studyItem: { createdById: userId },
              },
            },
          },
        },
      },
    });

    // Recently created tags
    const recentTags = await ctx.db.tag.findMany({
      where: {
        itemTags: {
          some: {
            studyItem: { createdById: userId },
          },
        },
      },
      take: 3,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            itemTags: {
              where: {
                studyItem: { createdById: userId },
              },
            },
          },
        },
      },
    });

    return {
      totalTags,
      topTags: topTags.map((tag) => ({
        ...tag,
        usageCount: tag._count.itemTags,
      })),
      recentTags: recentTags.map((tag) => ({
        ...tag,
        usageCount: tag._count.itemTags,
      })),
    };
  }),
});
