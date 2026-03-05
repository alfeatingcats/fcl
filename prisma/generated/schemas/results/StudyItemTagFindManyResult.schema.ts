import * as z from 'zod';
export const StudyItemTagFindManyResultSchema = z.object({
  data: z.array(z.object({
  studyItem: z.unknown(),
  studyItemId: z.string(),
  tag: z.unknown(),
  tagId: z.string(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});