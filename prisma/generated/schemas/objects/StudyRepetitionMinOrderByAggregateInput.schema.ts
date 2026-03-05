import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  repetitionNumber: SortOrderSchema.optional(),
  scheduledAt: SortOrderSchema.optional(),
  completedAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  studyItemId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StudyRepetitionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionMinOrderByAggregateInput>;
export const StudyRepetitionMinOrderByAggregateInputObjectZodSchema = makeSchema();
