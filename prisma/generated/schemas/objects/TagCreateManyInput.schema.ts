import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  color: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TagCreateManyInputObjectSchema: z.ZodType<Prisma.TagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyInput>;
export const TagCreateManyInputObjectZodSchema = makeSchema();
