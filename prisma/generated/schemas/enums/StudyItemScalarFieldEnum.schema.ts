import * as z from 'zod';

export const StudyItemScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'descriptionText', 'status', 'createdAt', 'updatedAt', 'completedAt', 'createdById'])

export type StudyItemScalarFieldEnum = z.infer<typeof StudyItemScalarFieldEnumSchema>;