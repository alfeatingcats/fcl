import { TRPCError } from "@trpc/server";
import { getTodayRange } from "@/shared/lib/i18n/date";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import {
  BulkRepetitionsSchema,
  CompleteRepetitionSchema,
  SkipRepetitionSchema,
  UpcomingEventSchema,
} from "@/shared/api/schemas";

export const repetitionsRouter = createTRPCRouter({
  complete: protectedProcedure
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
    const { start, end } = getTodayRange(ctx.timeZone);

    return await ctx.db.studyRepetition.findMany({
      where: {
        scheduledAt: { gte: new Date(start), lt: new Date(end) },
        status: "PENDING",
        studyItem: { createdById: ctx.session.user.id },
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

  skip: protectedProcedure
    .input(SkipRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.studyRepetition.update({
        where: { id: input.repetitionId },
        data: { status: "SKIPPED", updatedAt: new Date() },
      });
    }),

  bulkComplete: protectedProcedure
    .input(BulkRepetitionsSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const results = [];
        for (const r of input.repetitions) {
          const rep = await tx.studyRepetition.update({
            where: { id: r.repetitionId },
            data: {
              status: "COMPLETED",
              completedAt: new Date(),
              difficulty: r.difficulty,
            },
          });
          results.push(rep);
        }
        return results;
      });
    }),

  getStats: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const total = await ctx.db.studyRepetition.count({
      where: { studyItem: { createdById: userId } },
    });
    const completed = await ctx.db.studyRepetition.count({
      where: { studyItem: { createdById: userId }, status: "COMPLETED" },
    });
    const missed = await ctx.db.studyRepetition.count({
      where: { studyItem: { createdById: userId }, status: "MISSED" },
    });
    const skipped = await ctx.db.studyRepetition.count({
      where: { studyItem: { createdById: userId }, status: "SKIPPED" },
    });

    return { total, completed, missed, skipped };
  }),

  //TODO: pagination, timezone
  getUpcoming: protectedProcedure
    .input(UpcomingEventSchema)
    .query(async ({ ctx, input }) => {
      return await ctx.db.studyRepetition.findMany({
        where: {
          studyItem: { createdById: ctx.session.user.id },
          scheduledAt: { gte: input.start, lte: input.end },
        },
        include: {
          studyItem: true,
        },
        orderBy: { scheduledAt: "asc" },
      });
    }),
});
