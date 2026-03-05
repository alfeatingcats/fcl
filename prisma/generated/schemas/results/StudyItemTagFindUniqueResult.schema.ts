import * as z from 'zod';
export const StudyItemTagFindUniqueResultSchema = z.nullable(z.object({
  studyItem: z.unknown(),
  studyItemId: z.string(),
  tag: z.unknown(),
  tagId: z.string(),
  createdAt: z.date()
}));