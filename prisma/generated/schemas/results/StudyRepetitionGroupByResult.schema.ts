import * as z from 'zod';
export const StudyRepetitionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  repetitionNumber: z.number().int(),
  scheduledAt: z.date(),
  completedAt: z.date(),
  difficulty: z.number().int(),
  studyItemId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    repetitionNumber: z.number(),
    scheduledAt: z.number(),
    completedAt: z.number(),
    status: z.number(),
    difficulty: z.number(),
    studyItem: z.number(),
    studyItemId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    repetitionNumber: z.number().nullable(),
    difficulty: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    repetitionNumber: z.number().nullable(),
    difficulty: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    repetitionNumber: z.number().int().nullable(),
    scheduledAt: z.date().nullable(),
    completedAt: z.date().nullable(),
    difficulty: z.number().int().nullable(),
    studyItemId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    repetitionNumber: z.number().int().nullable(),
    scheduledAt: z.date().nullable(),
    completedAt: z.date().nullable(),
    difficulty: z.number().int().nullable(),
    studyItemId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));