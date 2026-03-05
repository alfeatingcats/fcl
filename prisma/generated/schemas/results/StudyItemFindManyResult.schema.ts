import * as z from 'zod';
export const StudyItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.string(),
  description: z.unknown().optional(),
  descriptionText: z.string().optional(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  completedAt: z.date().optional(),
  createdBy: z.unknown(),
  createdById: z.string(),
  repetitions: z.array(z.unknown()),
  itemTags: z.array(z.unknown())
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