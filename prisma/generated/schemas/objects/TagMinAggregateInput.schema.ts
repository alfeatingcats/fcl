import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  color: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TagMinAggregateInputObjectSchema: z.ZodType<Prisma.TagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagMinAggregateInputType>;
export const TagMinAggregateInputObjectZodSchema = makeSchema();
