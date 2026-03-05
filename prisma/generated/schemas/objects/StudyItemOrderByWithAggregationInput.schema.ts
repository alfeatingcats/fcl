import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudyItemCountOrderByAggregateInputObjectSchema as StudyItemCountOrderByAggregateInputObjectSchema } from './StudyItemCountOrderByAggregateInput.schema';
import { StudyItemMaxOrderByAggregateInputObjectSchema as StudyItemMaxOrderByAggregateInputObjectSchema } from './StudyItemMaxOrderByAggregateInput.schema';
import { StudyItemMinOrderByAggregateInputObjectSchema as StudyItemMinOrderByAggregateInputObjectSchema } from './StudyItemMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  descriptionText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: SortOrderSchema.optional(),
  _count: z.lazy(() => StudyItemCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudyItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudyItemMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudyItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudyItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemOrderByWithAggregationInput>;
export const StudyItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
