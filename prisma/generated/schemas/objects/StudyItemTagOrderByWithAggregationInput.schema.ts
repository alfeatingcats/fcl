import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyItemTagCountOrderByAggregateInputObjectSchema as StudyItemTagCountOrderByAggregateInputObjectSchema } from './StudyItemTagCountOrderByAggregateInput.schema';
import { StudyItemTagMaxOrderByAggregateInputObjectSchema as StudyItemTagMaxOrderByAggregateInputObjectSchema } from './StudyItemTagMaxOrderByAggregateInput.schema';
import { StudyItemTagMinOrderByAggregateInputObjectSchema as StudyItemTagMinOrderByAggregateInputObjectSchema } from './StudyItemTagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  studyItemId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StudyItemTagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudyItemTagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudyItemTagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudyItemTagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudyItemTagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagOrderByWithAggregationInput>;
export const StudyItemTagOrderByWithAggregationInputObjectZodSchema = makeSchema();
