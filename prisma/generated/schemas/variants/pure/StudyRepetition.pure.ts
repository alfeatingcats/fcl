import * as z from 'zod';
import { RepetitionStatusSchema } from '../../enums/RepetitionStatus.schema';
// prettier-ignore
export const StudyRepetitionModelSchema = z.object({
    id: z.string(),
    repetitionNumber: z.number().int(),
    scheduledAt: z.date(),
    completedAt: z.date().nullable(),
    status: RepetitionStatusSchema,
    difficulty: z.number().int().nullable(),
    studyItem: z.unknown(),
    studyItemId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StudyRepetitionPureType = z.infer<typeof StudyRepetitionModelSchema>;
