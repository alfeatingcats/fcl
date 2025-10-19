import { isNil } from "es-toolkit";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

import { EBBINGHAUS_INTERVALS } from "@/shared/lib/const";

import {
  CreateStudyItemSchema,
  DeleteStudyItemSchema,
  ReadStudyItemsSchema,
  StudyItemIdSchema,
  UpdateStudyItemSchema,
} from "@/shared/api/schemas";

export const studyItemsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateStudyItemSchema)
    .mutation(async ({ ctx, input }) => {
      const now = new Date();

      return await ctx.db.$transaction(async (tx) => {
        const studyItem = await tx.studyItem.create({
          data: {
            title: input.title,
            description: input.description,
            createdById: ctx.session.user.id,
          },
        });

        const repetitions = EBBINGHAUS_INTERVALS.map(
          (intervalMinutes, index) => ({
            studyItemId: studyItem.id,
            repetitionNumber: index + 1,
            scheduledAt: new Date(now.getTime() + intervalMinutes * 60 * 1000),
          }),
        );

        await tx.studyRepetition.createMany({
          data: repetitions,
        });

        if (input.tagIds?.length) {
          const tagConnections = input.tagIds.map((tagId) => ({
            studyItemId: studyItem.id,
            tagId,
          }));

          await tx.studyItemTag.createMany({
            data: tagConnections,
          });
        }

        return await tx.studyItem.findUnique({
          where: {
            id: studyItem.id,
          },
          include: {
            repetitions: {
              orderBy: {
                repetitionNumber: "asc",
              },
            },
            itemTags: {
              include: { tag: true },
            },
            createdBy: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        });
      });
    }),
  getAll: protectedProcedure
    .input(ReadStudyItemsSchema)
    .query(async ({ ctx, input }) => {
      const { status, tagIds, search, limit, cursor } = input;

      const where = {
        createdById: ctx.session.user.id,
        ...(status && { status }),
        ...(search && {
          OR: [
            { title: { contains: search, mode: "insensitive" as const } },
            { description: { contains: search, mode: "insensitive" as const } },
          ],
        }),
        ...(tagIds &&
          tagIds.length > 0 && {
            itemTags: {
              some: {
                tagId: { in: tagIds },
              },
            },
          }),
      };

      const items = await ctx.db.studyItem.findMany({
        where,
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          repetitions: {
            // where: { status: "PENDING" },
            orderBy: { scheduledAt: "asc" },
            // take: 1,
          },
          itemTags: {
            include: { tag: true },
          },
          // _count: {
          //   select: {
          //     repetitions: {
          //       where: { status: "COMPLETED" },
          //     },
          //   },
          // },
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      return {
        items,
        nextCursor,
      };
    }),

  // Update study item
  update: protectedProcedure
    .input(UpdateStudyItemSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        // Check access permissions
        const existingItem = await tx.studyItem.findFirst({
          where: {
            id: input.id,
            createdById: ctx.session.user.id,
          },
        });

        if (!existingItem) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Study item not found",
          });
        }

        // Prepare update data for the study item
        const updateData: Record<string, unknown> = {};
        if (!isNil(input.title)) updateData.title = input.title;
        if (!isNil(input.description))
          updateData.description = input.description;
        if (!isNil(input.status)) {
          updateData.status = input.status;
          if (input.status === "COMPLETED") {
            updateData.completedAt = new Date();
          }
        }

        // Update the study item if there are changes
        if (Object.keys(updateData).length > 0) {
          await tx.studyItem.update({
            where: { id: input.id },
            data: updateData,
          });
        }

        // Handle tags synchronization if tagIds provided
        if (!isNil(input.tagIds)) {
          // Delete existing tag connections
          await tx.studyItemTag.deleteMany({
            where: {
              studyItemId: input.id,
            },
          });

          // Create new tag connections
          if (input.tagIds.length > 0) {
            const tagConnections = input.tagIds.map((tagId) => ({
              studyItemId: input.id,
              tagId,
            }));

            await tx.studyItemTag.createMany({
              data: tagConnections,
            });
          }
        }

        // Return updated item with all relations
        return await tx.studyItem.findUnique({
          where: { id: input.id },
          include: {
            repetitions: {
              orderBy: { repetitionNumber: "asc" },
            },
            itemTags: {
              include: { tag: true },
            },
            createdBy: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        });
      });
    }),

  // Delete study item
  delete: protectedProcedure
    .input(DeleteStudyItemSchema)
    .mutation(async ({ ctx, input }) => {
      // Check access permissions
      const existingItem = await ctx.db.studyItem.findFirst({
        where: {
          id: input.id,
          createdById: ctx.session.user.id,
        },
      });

      if (!existingItem) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Study item not found",
        });
      }

      // Cascade delete will automatically remove:
      // - StudyRepetition (onDelete: Cascade)
      // - StudyItemTag (onDelete: Cascade)
      return await ctx.db.studyItem.delete({
        where: { id: input.id },
      });
    }),

  getById: protectedProcedure
    .input(StudyItemIdSchema)
    .query(async ({ ctx, input }) => {
      const item = await ctx.db.studyItem.findFirst({
        where: { id: input.id, createdById: ctx.session.user.id },
        include: {
          repetitions: { orderBy: { repetitionNumber: "asc" } },
          itemTags: { include: { tag: true } },
        },
      });

      if (!item) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Study item not found",
        });
      }
      return item;
    }),

  resetRepetitions: protectedProcedure
    .input(StudyItemIdSchema)
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.studyItem.findFirst({
        where: { id: input.id, createdById: ctx.session.user.id },
      });
      if (!item) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Study item not found",
        });
      }

      return await ctx.db.$transaction(async (tx) => {
        await tx.studyRepetition.deleteMany({
          where: { studyItemId: input.id },
        });

        const now = new Date();
        const repetitions = EBBINGHAUS_INTERVALS.map(
          (intervalMinutes, index) => ({
            studyItemId: input.id,
            repetitionNumber: index + 1,
            scheduledAt: new Date(now.getTime() + intervalMinutes * 60 * 1000),
          }),
        );

        await tx.studyRepetition.createMany({ data: repetitions });

        return await tx.studyItem.findUnique({
          where: { id: input.id },
          include: { repetitions: true },
        });
      });
    }),
});
