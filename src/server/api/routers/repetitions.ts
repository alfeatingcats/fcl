import { TRPCError } from "@trpc/server";
import { getTodayRange } from "@/shared/lib/i18n/date";
import { CompleteRepetitionSchema } from "@/entities/repetitions";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

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
});
