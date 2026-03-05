import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudyRepetitionCountOrderByAggregateInputObjectSchema as StudyRepetitionCountOrderByAggregateInputObjectSchema } from './StudyRepetitionCountOrderByAggregateInput.schema';
import { StudyRepetitionAvgOrderByAggregateInputObjectSchema as StudyRepetitionAvgOrderByAggregateInputObjectSchema } from './StudyRepetitionAvgOrderByAggregateInput.schema';
import { StudyRepetitionMaxOrderByAggregateInputObjectSchema as StudyRepetitionMaxOrderByAggregateInputObjectSchema } from './StudyRepetitionMaxOrderByAggregateInput.schema';
import { StudyRepetitionMinOrderByAggregateInputObjectSchema as StudyRepetitionMinOrderByAggregateInputObjectSchema } from './StudyRepetitionMinOrderByAggregateInput.schema';
import { StudyRepetitionSumOrderByAggregateInputObjectSchema as StudyRepetitionSumOrderByAggregateInputObjectSchema } from './StudyRepetitionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  repetitionNumber: SortOrderSchema.optional(),
  scheduledAt: SortOrderSchema.optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  difficulty: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  studyItemId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StudyRepetitionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StudyRepetitionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudyRepetitionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudyRepetitionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StudyRepetitionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudyRepetitionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudyRepetitionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionOrderByWithAggregationInput>;
export const StudyRepetitionOrderByWithAggregationInputObjectZodSchema = makeSchema();
