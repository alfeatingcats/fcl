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
})
