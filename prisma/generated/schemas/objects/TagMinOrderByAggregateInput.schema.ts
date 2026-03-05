import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagMinOrderByAggregateInput>;
export const TagMinOrderByAggregateInputObjectZodSchema = makeSchema();
