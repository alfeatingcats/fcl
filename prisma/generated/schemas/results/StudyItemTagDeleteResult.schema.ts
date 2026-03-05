import * as z from 'zod';
export const StudyItemTagDeleteResultSchema = z.nullable(z.object({
  studyItem: z.unknown(),
  studyItemId: z.string(),
  tag: z.unknown(),
  tagId: z.string(),
  createdAt: z.date()
}));