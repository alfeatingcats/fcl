import { isNil } from "es-toolkit";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

import { EBBINGHAUS_INTERVALS } from "@/shared/lib/const";
import {
  CreateStudyItemSchema,
  ReadStudyItemsSchema,
  UpdateStudyItemSchema,
} from "@/entities/study-item";
import { CompleteRepetitionSchema } from "@/entities/repetitions";

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
        take: limit + 1, // +1
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          repetitions: {
            where: { status: "PENDING" },
            orderBy: { scheduledAt: "asc" },
            take: 1,
          },
          itemTags: {
            include: { tag: true },
          },
          _count: {
            select: {
              repetitions: {
                where: { status: "COMPLETED" },
              },
            },
          },
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

  completeRepetition: protectedProcedure
    .input(CompleteRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const repetition = await tx.studyRepetition.findFirst({
          where: {
            id: input.repetitionId,
            studyItem: { createdById: ctx.session.user.id },
          },
          include: { studyItem: true },
        });

        if (!repetition) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Repetition not found",
          });
        }

        if (repetition.status === "COMPLETED") {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Repetition is already completed",
          });
        }

        // Mark the repetition as completed
        const updatedRepetition = await tx.studyRepetition.update({
          where: { id: input.repetitionId },
          data: {
            status: "COMPLETED",
            completedAt: new Date(),
            difficulty: input.difficulty,
          },
        });

        // Check if all repetitions are completed
        const remainingRepetitions = await tx.studyRepetition.count({
          where: {
            studyItemId: repetition.studyItemId,
            status: "PENDING",
          },
        });

        // If all repetitions are completed, mark the study item as completed
        if (remainingRepetitions === 0) {
          await tx.studyItem.update({
            where: { id: repetition.studyItemId },
            data: {
              status: "COMPLETED",
              completedAt: new Date(),
            },
          });
        }

        return updatedRepetition;
      });
    }),

  getTodayRepetitions: protectedProcedure.query(async ({ ctx }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    return await ctx.db.studyRepetition.findMany({
      where: {
        studyItem: { createdById: ctx.session.user.id },
        status: "PENDING",
        scheduledAt: { lt: tomorrow }, // Before the end of the day
      },
      include: {
        studyItem: {
          include: {
            itemTags: {
              include: { tag: true },
            },
          },
        },
      },
      orderBy: { scheduledAt: "asc" },
    });
  }),

  // Update study item
  update: protectedProcedure
    .input(UpdateStudyItemSchema)
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

      const updateData: Record<string, unknown> = {};
      if (!isNil(input.title)) updateData.title = input.title;
      if (!isNil(input.description)) updateData.description = input.description;
      if (!isNil(input.status)) {
        updateData.status = input.status;
        if (input.status === "COMPLETED") {
          updateData.completedAt = new Date();
        }
      }

      return await ctx.db.studyItem.update({
        where: { id: input.id },
        data: updateData,
        include: {
          repetitions: { orderBy: { repetitionNumber: "asc" } },
          itemTags: { include: { tag: true } },
        },
      });
    }),
});
