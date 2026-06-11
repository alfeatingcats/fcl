import { TRPCError } from '@trpc/server'
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns'
import type { CardInput } from 'ts-fsrs'
import { fsrs, type Grade, Rating, State } from 'ts-fsrs'
import z from 'zod'

import {
  BulkReviewSchema,
  GetCalendarSchema,
  GetHistorySchema,
  QuickCompleteSchema,
  RescheduleSchema,
  ReviewRepetitionSchema,
  SkipRepetitionSchema,
  UpcomingEventSchema,
} from '@/shared/api/schemas'
import {
  CalendarOutputSchema,
  FullRepetitionListSchema,
  GroupedByTagsOutputSchema,
  RepetitionHistoryOutputSchema,
  RepetitionStatsOutputSchema,
  StreakOutputSchema,
} from '@/shared/api/schemas/fg/repetitions'
import { getTodayRange } from '@/shared/lib/i18n'

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

import { StudyRepetitionSchema } from '$/prisma/generated/schemas'

const scheduler = fsrs()

const FSRS_STATE_MAP: Record<
  string,
  'NEW' | 'LEARNING' | 'REVIEW' | 'RELEARNING'
> = {
  '0': 'NEW',
  '1': 'LEARNING',
  '2': 'REVIEW',
  '3': 'RELEARNING',
}

function dbStateFromFSRS(
  state: State,
): 'NEW' | 'LEARNING' | 'REVIEW' | 'RELEARNING' {
  return FSRS_STATE_MAP[String(state)] || 'NEW'
}

function buildCardInput(rep: {
  due: Date
  stability: number
  difficulty: number
  reps: number
  lapses: number
  state: string
  lastReview: Date | null
}): CardInput {
  const stateMap: Record<string, State> = {
    NEW: State.New,
    LEARNING: State.Learning,
    REVIEW: State.Review,
    RELEARNING: State.Relearning,
  }
  return {
    due: rep.due,
    stability: rep.stability,
    difficulty: rep.difficulty,
    elapsed_days: rep.lastReview
      ? Math.round(
          (Date.now() - rep.lastReview.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0,
    scheduled_days: rep.lastReview
      ? Math.round(
          (rep.due.getTime() - rep.lastReview.getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0,
    reps: rep.reps,
    lapses: rep.lapses,
    state: stateMap[rep.state] ?? State.New,
    last_review: rep.lastReview,
    learning_steps: 0,
  }
}

export const repetitionsRouter = createTRPCRouter({
  review: protectedProcedure
    .input(ReviewRepetitionSchema)
    .output(StudyRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const repetition = await tx.studyRepetition.findFirst({
          where: {
            id: input.repetitionId,
            studyItem: { createdById: ctx.session.user.id },
          },
          include: { studyItem: true },
        })

        if (!repetition) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Repetition not found',
          })
        }

        if (repetition.status === 'COMPLETED') {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Repetition is already completed',
          })
        }

        const now = new Date()
        const fsrsCard = buildCardInput(repetition)
        const result = scheduler.next(fsrsCard, now, input.rating as Grade)
        const updatedCard = result.card

        const updatedRepetition = await tx.studyRepetition.update({
          where: { id: input.repetitionId },
          data: {
            status: 'COMPLETED',
            completedAt: now,
            state: dbStateFromFSRS(updatedCard.state),
            stability: updatedCard.stability,
            difficulty: updatedCard.difficulty,
            due: updatedCard.due,
            lastReview: now,
            reps: updatedCard.reps,
            lapses: updatedCard.lapses,
          },
        })

        if (updatedCard.state === State.Review && updatedCard.stability > 180) {
          await tx.studyItem.update({
            where: { id: repetition.studyItemId },
            data: {
              status: 'COMPLETED',
              completedAt: now,
            },
          })
        }

        return updatedRepetition
      })
    }),

  getTodayRepetitions: protectedProcedure
    .output(FullRepetitionListSchema)
    .query(async ({ ctx }) => {
      const { start, end } = getTodayRange(ctx.timeZone)

      return await ctx.db.studyRepetition.findMany({
        where: {
          due: { gte: new Date(start), lt: new Date(end) },
          status: 'PENDING',
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
        orderBy: { due: 'asc' },
      })
    }),

  skip: protectedProcedure
    .input(SkipRepetitionSchema)
    .output(StudyRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.studyRepetition.update({
        where: { id: input.repetitionId },
        data: { status: 'SKIPPED', updatedAt: new Date() },
      })
    }),

  wait: protectedProcedure
    .input(SkipRepetitionSchema)
    .output(StudyRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      const tomorrow = addDays(new Date(), 1)
      return await ctx.db.studyRepetition.update({
        where: { id: input.repetitionId },
        data: {
          due: tomorrow,
          updatedAt: new Date(),
        },
      })
    }),

  bulkReview: protectedProcedure
    .input(BulkReviewSchema)
    .output(z.array(StudyRepetitionSchema))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const results = []
        for (const r of input.reviews) {
          const rep = await tx.studyRepetition.findFirst({
            where: {
              id: r.repetitionId,
              studyItem: { createdById: ctx.session.user.id },
            },
          })
          if (!rep) continue

          const now = new Date()
          const fsrsCard = buildCardInput(rep)
          const result = scheduler.next(fsrsCard, now, r.rating as Grade)
          const updatedCard = result.card

          const updated = await tx.studyRepetition.update({
            where: { id: r.repetitionId },
            data: {
              status: 'COMPLETED',
              completedAt: now,
              state: dbStateFromFSRS(updatedCard.state),
              stability: updatedCard.stability,
              difficulty: updatedCard.difficulty,
              due: updatedCard.due,
              lastReview: now,
              reps: updatedCard.reps,
              lapses: updatedCard.lapses,
            },
          })
          results.push(updated)
        }
        return results
      })
    }),

  getStats: protectedProcedure
    .output(RepetitionStatsOutputSchema)
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id
      const { start, end } = getTodayRange(ctx.timeZone)
      const now = new Date()

      const [total, completed, missed, skipped, pending] = await Promise.all([
        ctx.db.studyRepetition.count({
          where: { studyItem: { createdById: userId } },
        }),
        ctx.db.studyRepetition.count({
          where: { studyItem: { createdById: userId }, status: 'COMPLETED' },
        }),
        ctx.db.studyRepetition.count({
          where: { studyItem: { createdById: userId }, status: 'MISSED' },
        }),
        ctx.db.studyRepetition.count({
          where: { studyItem: { createdById: userId }, status: 'SKIPPED' },
        }),
        ctx.db.studyRepetition.count({
          where: { studyItem: { createdById: userId }, status: 'PENDING' },
        }),
      ])

      const todayDone = await ctx.db.studyRepetition.count({
        where: {
          studyItem: { createdById: userId },
          status: 'COMPLETED',
          completedAt: { gte: new Date(start), lt: new Date(end) },
        },
      })

      const todayTotal = await ctx.db.studyRepetition.count({
        where: {
          studyItem: { createdById: userId },
          due: { gte: new Date(start), lt: new Date(end) },
        },
      })

      const overdueCount = await ctx.db.studyRepetition.count({
        where: {
          studyItem: { createdById: userId },
          status: 'PENDING',
          due: { lt: new Date(start) },
        },
      })

      let streak = 0
      let checkDate = startOfDay(now)

      while (true) {
        const dayStart = checkDate
        const dayEnd = endOfDay(checkDate)

        const doneOnDay = await ctx.db.studyRepetition.count({
          where: {
            studyItem: { createdById: userId },
            completedAt: { gte: dayStart, lte: dayEnd },
          },
        })

        if (doneOnDay > 0) {
          streak++
          checkDate = subDays(checkDate, 1)
        } else {
          break
        }
      }

      return {
        total,
        completed,
        missed,
        skipped,
        pending,
        todayDone,
        todayTotal,
        overdueCount,
        streak,
      }
    }),

  getOverdue: protectedProcedure
    .output(FullRepetitionListSchema)
    .query(async ({ ctx }) => {
      const { start } = getTodayRange(ctx.timeZone)

      return await ctx.db.studyRepetition.findMany({
        where: {
          studyItem: { createdById: ctx.session.user.id },
          status: 'PENDING',
          due: { lt: new Date(start) },
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
        orderBy: { due: 'asc' },
      })
    }),

  getHistory: protectedProcedure
    .input(GetHistorySchema)
    .output(RepetitionHistoryOutputSchema)
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id
      const { start, end, limit, cursor } = input

      const where: Record<string, unknown> = {
        studyItem: { createdById: userId },
        status: { in: ['COMPLETED', 'MISSED', 'SKIPPED'] },
      }

      const dateFilter: Record<string, Date> = {}
      if (start) dateFilter.gte = start
      if (end) dateFilter.lte = end
      if (start || end) where.completedAt = dateFilter

      if (cursor) {
        where.id = { lt: cursor }
      }

      const items = await ctx.db.studyRepetition.findMany({
        where,
        include: {
          studyItem: {
            select: { id: true, title: true, descriptionText: true },
          },
        },
        orderBy: { completedAt: 'desc' },
        take: limit + 1,
      })

      let nextCursor: string | null = null
      if (items.length > limit) {
        const next = items.pop()
        nextCursor = next?.id ?? null
      }

      return { items, nextCursor }
    }),

  getStreak: protectedProcedure
    .output(StreakOutputSchema)
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id
      const today = startOfDay(new Date())
      let currentStreak = 0
      let checkDate = today

      while (true) {
        const dayStart = checkDate
        const dayEnd = endOfDay(checkDate)

        const doneOnDay = await ctx.db.studyRepetition.count({
          where: {
            studyItem: { createdById: userId },
            completedAt: { gte: dayStart, lte: dayEnd },
          },
        })

        if (doneOnDay > 0) {
          currentStreak++
          checkDate = subDays(checkDate, 1)
        } else {
          break
        }
      }

      let longestStreak = 0
      let tempStreak = 0

      const allCompletedDates = await ctx.db.studyRepetition.findMany({
        where: {
          studyItem: { createdById: userId },
          completedAt: { not: null },
        },
        select: { completedAt: true },
        orderBy: { completedAt: 'asc' },
      })

      const uniqueDates = new Set<string>()
      for (const r of allCompletedDates) {
        if (r.completedAt) {
          uniqueDates.add(startOfDay(r.completedAt).toISOString())
        }
      }
      const sortedDates = Array.from(uniqueDates).sort()

      for (let i = 0; i < sortedDates.length; i++) {
        if (i === 0) {
          tempStreak = 1
        } else {
          const prev = new Date(sortedDates[i - 1] as string)
          const curr = new Date(sortedDates[i] as string)
          const diffDays = Math.round(
            (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24),
          )
          if (diffDays === 1) {
            tempStreak++
          } else {
            tempStreak = 1
          }
        }
        longestStreak = Math.max(longestStreak, tempStreak)
      }

      return { currentStreak, longestStreak }
    }),

  getCalendar: protectedProcedure
    .input(GetCalendarSchema)
    .output(CalendarOutputSchema)
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id

      const repetitions = await ctx.db.studyRepetition.findMany({
        where: {
          studyItem: { createdById: userId },
          due: { gte: input.start, lte: input.end },
        },
        select: {
          due: true,
          completedAt: true,
          status: true,
        },
      })

      const dayMap = new Map<string, { count: number; completed: number }>()

      for (const rep of repetitions) {
        const dateKey = startOfDay(rep.due).toISOString()
        const entry = dayMap.get(dateKey) || { count: 0, completed: 0 }
        entry.count++
        if (rep.status === 'COMPLETED') entry.completed++
        dayMap.set(dateKey, entry)
      }

      const result = []
      let current = startOfDay(input.start)
      const end = endOfDay(input.end)

      while (current <= end) {
        const dateKey = current.toISOString()
        const data = dayMap.get(dateKey) || { count: 0, completed: 0 }
        result.push({
          date: dateKey,
          count: data.count,
          completed: data.completed,
        })
        current = new Date(current.getTime() + 24 * 60 * 60 * 1000)
      }

      return result
    }),

  getGroupedByTags: protectedProcedure
    .output(GroupedByTagsOutputSchema)
    .query(async ({ ctx }) => {
      const { start, end } = getTodayRange(ctx.timeZone)
      const userId = ctx.session.user.id

      const todayRepetitions = await ctx.db.studyRepetition.findMany({
        where: {
          due: { gte: new Date(start), lt: new Date(end) },
          status: 'PENDING',
          studyItem: { createdById: userId },
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
        orderBy: { due: 'asc' },
      })

      type TagGroupValue = {
        tagId: string
        tagName: string
        tagColor: string
        repetitions: Array<(typeof todayRepetitions)[number]>
        count: number
      }

      const tagGroups = new Map<string, TagGroupValue>()

      for (const rep of todayRepetitions) {
        const tags = rep.studyItem.itemTags

        if (tags.length === 0) {
          const group = tagGroups.get('__untagged') || {
            tagId: '__untagged',
            tagName: 'Без тега',
            tagColor: '',
            repetitions: [],
            count: 0,
          }
          group.repetitions.push(rep)
          group.count++
          tagGroups.set('__untagged', group)
        } else {
          for (const itemTag of tags) {
            const key = itemTag.tagId
            const group = tagGroups.get(key) || {
              tagId: itemTag.tagId,
              tagName: itemTag.tag.name,
              tagColor: itemTag.tag.color,
              repetitions: [],
              count: 0,
            }
            group.repetitions.push(rep)
            group.count++
            tagGroups.set(key, group)
          }
        }
      }

      return Array.from(tagGroups.values())
    }),

  quickComplete: protectedProcedure
    .input(QuickCompleteSchema)
    .output(StudyRepetitionSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const repetition = await tx.studyRepetition.findFirst({
          where: {
            id: input.repetitionId,
            studyItem: { createdById: ctx.session.user.id },
          },
          include: { studyItem: true },
        })

        if (!repetition) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Repetition not found',
          })
        }

        if (repetition.status === 'COMPLETED') {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Repetition is already completed',
          })
        }

        const rating = input.difficulty
          ? input.difficulty <= 2
            ? Rating.Again
            : Rating.Good
          : Rating.Good

        const now = new Date()
        const fsrsCard = buildCardInput(repetition)
        const result = scheduler.next(fsrsCard, now, rating)
        const updatedCard = result.card

        const updatedRepetition = await tx.studyRepetition.update({
          where: { id: input.repetitionId },
          data: {
            status: 'COMPLETED',
            completedAt: now,
            state: dbStateFromFSRS(updatedCard.state),
            stability: updatedCard.stability,
            difficulty: updatedCard.difficulty,
            due: updatedCard.due,
            lastReview: now,
            reps: updatedCard.reps,
            lapses: updatedCard.lapses,
          },
        })

        if (updatedCard.state === State.Review && updatedCard.stability > 180) {
          await tx.studyItem.update({
            where: { id: repetition.studyItemId },
            data: {
              status: 'COMPLETED',
              completedAt: now,
            },
          })
        }

        return updatedRepetition
      })
    }),

  rescheduleOverdue: protectedProcedure
    .input(RescheduleSchema)
    .output(z.array(StudyRepetitionSchema))
    .mutation(async ({ ctx, input }) => {
      const { start } = getTodayRange(ctx.timeZone)
      const now = new Date()
      const userId = ctx.session.user.id

      const overdueRepetitions = await ctx.db.studyRepetition.findMany({
        where: input.repetitionIds
          ? {
              studyItem: { createdById: userId },
              status: 'PENDING',
              id: { in: input.repetitionIds },
            }
          : {
              studyItem: { createdById: userId },
              status: 'PENDING',
              due: { lt: new Date(start) },
            },
      })

      const results = await Promise.all(
        overdueRepetitions.map((rep) =>
          ctx.db.studyRepetition.update({
            where: { id: rep.id },
            data: { due: now },
          }),
        ),
      )

      return results
    }),

  getUpcoming: protectedProcedure
    .input(UpcomingEventSchema)
    .output(FullRepetitionListSchema)
    .query(async ({ ctx, input }) => {
      const { start, end, limit, cursor } = input

      const where: Record<string, unknown> = {
        studyItem: { createdById: ctx.session.user.id },
        due: { gte: start, lte: end },
      }

      if (cursor) {
        where.due = { gte: new Date(cursor) }
      }

      return await ctx.db.studyRepetition.findMany({
        where,
        include: {
          studyItem: {
            include: {
              itemTags: {
                include: { tag: true },
              },
            },
          },
        },
        orderBy: { due: 'asc' },
        take: limit,
      })
    }),
})
