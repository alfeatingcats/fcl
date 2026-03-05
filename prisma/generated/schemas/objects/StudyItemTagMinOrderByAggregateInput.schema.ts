import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  studyItemId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const StudyItemTagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagMinOrderByAggregateInput>;
export const StudyItemTagMinOrderByAggregateInputObjectZodSchema = makeSchema();
