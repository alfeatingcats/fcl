import * as z from 'zod';
export const TagUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().optional(),
  createdAt: z.date(),
  itemTags: z.array(z.unknown())
});