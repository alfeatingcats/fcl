import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  color: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TagCreateWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutItemTagsInput>;
export const TagCreateWithoutItemTagsInputObjectZodSchema = makeSchema();
