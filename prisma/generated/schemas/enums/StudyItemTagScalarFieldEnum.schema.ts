import * as z from 'zod';

export const StudyItemTagScalarFieldEnumSchema = z.enum(['studyItemId', 'tagId', 'createdAt'])

export type StudyItemTagScalarFieldEnum = z.infer<typeof StudyItemTagScalarFieldEnumSchema>;