import * as z from 'zod';
export const StudyRepetitionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  repetitionNumber: z.number().int(),
  scheduledAt: z.date(),
  completedAt: z.date().optional(),
  status: z.unknown(),
  difficulty: z.number().int().optional(),
  studyItem: z.unknown(),
  studyItemId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));