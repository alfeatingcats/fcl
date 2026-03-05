import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagCountOrderByAggregateInputObjectSchema as TagCountOrderByAggregateInputObjectSchema } from './TagCountOrderByAggregateInput.schema';
import { TagMaxOrderByAggregateInputObjectSchema as TagMaxOrderByAggregateInputObjectSchema } from './TagMaxOrderByAggregateInput.schema';
import { TagMinOrderByAggregateInputObjectSchema as TagMinOrderByAggregateInputObjectSchema } from './TagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithAggregationInput>;
export const TagOrderByWithAggregationInputObjectZodSchema = makeSchema();
