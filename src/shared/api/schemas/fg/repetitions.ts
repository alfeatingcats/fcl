import { z } from 'zod'

import {
  StudyItemSchema,
  StudyItemTagSchema,
  StudyRepetitionSchema,
  TagSchema,
} from '$/prisma/generated/schemas'

// 1. Repetition + StudyItem (for getUpcoming)
export const RepetitionWithItemSchema = StudyRepetitionSchema.extend({
  studyItem: StudyItemSchema,
})

// 2. Full structure (for getTodayRepetitions)
// We go deeper: Repetition -> StudyItem -> StudyItemTag -> Tag
export const FullRepetitionSchema = StudyRepetitionSchema.extend({
  studyItem: StudyItemSchema.extend({
    description: z.any().nullable(),
    itemTags: z.array(
      StudyItemTagSchema.extend({
        tag: TagSchema,
      }),
    ),
  }),
})

export type FullRepetitionType = z.infer<typeof FullRepetitionSchema>
export const FullRepetitionListSchema = z.array(FullRepetitionSchema)
export type FullRepetitionListType = z.infer<typeof FullRepetitionListSchema>

// 3. Statistics
export const RepetitionStatsOutputSchema = z.object({
  total: z.number(),
  completed: z.number(),
  missed: z.number(),
  skipped: z.number(),
  pending: z.number(),
  todayDone: z.number(),
  todayTotal: z.number(),
  overdueCount: z.number(),
  streak: z.number(),
})

export type RepetitionStatsType = z.infer<typeof RepetitionStatsOutputSchema>

// 4. History (пагинированная история выполненных повторений)
export const RepetitionHistoryItemSchema = StudyRepetitionSchema.extend({
  studyItem: StudyItemSchema.pick({
    id: true,
    title: true,
    descriptionText: true,
  }),
})

export type RepetitionHistoryItemType = z.infer<
  typeof RepetitionHistoryItemSchema
>

export const RepetitionHistoryOutputSchema = z.object({
  items: z.array(RepetitionHistoryItemSchema),
  nextCursor: z.string().nullable(),
})

export type RepetitionHistoryOutputType = z.infer<
  typeof RepetitionHistoryOutputSchema
>

// 5. Calendar day aggregation
export const CalendarDaySchema = z.object({
  date: z.string(),
  count: z.number(),
  completed: z.number(),
})

export type CalendarDayType = z.infer<typeof CalendarDaySchema>

export const CalendarOutputSchema = z.array(CalendarDaySchema)
export type CalendarOutputType = z.infer<typeof CalendarOutputSchema>

// 6. Streak
export const StreakOutputSchema = z.object({
  currentStreak: z.number(),
  longestStreak: z.number(),
})

export type StreakOutputType = z.infer<typeof StreakOutputSchema>

// 7. Grouped by tags
export const TagGroupSchema = z.object({
  tagId: z.string(),
  tagName: z.string(),
  tagColor: z.string(),
  repetitions: z.array(FullRepetitionSchema),
  count: z.number(),
})

export type TagGroupType = z.infer<typeof TagGroupSchema>

export const GroupedByTagsOutputSchema = z.array(TagGroupSchema)
export type GroupedByTagsOutputType = z.infer<typeof GroupedByTagsOutputSchema>
