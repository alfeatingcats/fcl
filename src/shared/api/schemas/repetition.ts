import { z } from 'zod'

export const ReviewRatingSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
])

export type ReviewRating = z.infer<typeof ReviewRatingSchema>

export const ReviewRepetitionSchema = z.object({
  repetitionId: z.string().cuid('Invalid repetition ID'),
  rating: ReviewRatingSchema,
})

export type ReviewRepetitionInput = z.input<typeof ReviewRepetitionSchema>

export const SkipRepetitionSchema = z.object({
  repetitionId: z.string().cuid('Invalid repetition ID'),
})

export type SkipRepetitionInput = z.input<typeof SkipRepetitionSchema>

export const WaitRepetitionSchema = z.object({
  repetitionId: z.string().cuid('Invalid repetition ID'),
})

export type WaitRepetitionInput = z.input<typeof WaitRepetitionSchema>

export const BulkReviewSchema = z.object({
  reviews: z.array(ReviewRepetitionSchema),
})

export type BulkReviewInput = z.input<typeof BulkReviewSchema>

export const UpcomingEventSchema = z.object({
  start: z.date(),
  end: z.date(),
  limit: z.number().min(1).max(100).optional().default(50),
  cursor: z.string().optional(),
})

export type UpcomingEventInput = z.input<typeof UpcomingEventSchema>

export const GetHistorySchema = z.object({
  start: z.date().optional(),
  end: z.date().optional(),
  limit: z.number().min(1).max(100).optional().default(50),
  cursor: z.string().optional(),
})

export type GetHistoryInput = z.input<typeof GetHistorySchema>

export const GetCalendarSchema = z.object({
  start: z.date(),
  end: z.date(),
})

export type GetCalendarInput = z.input<typeof GetCalendarSchema>

export const QuickCompleteSchema = z.object({
  repetitionId: z.string().cuid('Invalid repetition ID'),
  difficulty: z
    .number()
    .min(1, 'Difficulty must be between 1 and 5')
    .max(5, 'Difficulty must be between 1 and 5')
    .int('Difficulty must be an integer')
    .optional(),
})

export type QuickCompleteInput = z.input<typeof QuickCompleteSchema>

export const RescheduleSchema = z.object({
  repetitionIds: z.array(z.string().cuid()).optional(),
})

export type RescheduleInput = z.input<typeof RescheduleSchema>
