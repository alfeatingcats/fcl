import * as z from 'zod';
import { RepetitionStatusSchema } from '../../enums/RepetitionStatus.schema';
// prettier-ignore
export const StudyRepetitionInputSchema = z.object({
    id: z.string(),
    repetitionNumber: z.number().int(),
    scheduledAt: z.date(),
    completedAt: z.date().optional().nullable(),
    status: RepetitionStatusSchema,
    difficulty: z.number().int().optional().nullable(),
    studyItem: z.unknown(),
    studyItemId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StudyRepetitionInputType = z.infer<typeof StudyRepetitionInputSchema>;
