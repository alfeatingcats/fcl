import * as z from 'zod';

export const StudyItemTagSchema = z.object({
  studyItemId: z.string(),
  tagId: z.string(),
  createdAt: z.date(),
});

export type StudyItemTagType = z.infer<typeof StudyItemTagSchema>;
