import * as z from 'zod';
export const StudyItemFindFirstResultSchema = z.nullable(z.object({
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
}));