import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  descriptionText: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional()
}).strict();
export const StudyItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemMinOrderByAggregateInput>;
export const StudyItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
