import * as z from 'zod';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';

export const StudyRepetitionSchema = z.object({
  id: z.string(),
  repetitionNumber: z.number().int(),
  scheduledAt: z.date(),
  completedAt: z.date().nullish(),
  status: RepetitionStatusSchema.default("PENDING"),
  difficulty: z.number().int().nullish(),
  studyItemId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StudyRepetitionType = z.infer<typeof StudyRepetitionSchema>;
