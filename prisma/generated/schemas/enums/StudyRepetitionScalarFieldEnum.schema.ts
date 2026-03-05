import * as z from 'zod';

export const StudyRepetitionScalarFieldEnumSchema = z.enum(['id', 'repetitionNumber', 'scheduledAt', 'completedAt', 'status', 'difficulty', 'studyItemId', 'createdAt', 'updatedAt'])

export type StudyRepetitionScalarFieldEnum = z.infer<typeof StudyRepetitionScalarFieldEnumSchema>;