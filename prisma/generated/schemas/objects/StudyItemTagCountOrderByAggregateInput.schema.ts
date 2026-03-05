import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  studyItemId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const StudyItemTagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCountOrderByAggregateInput>;
export const StudyItemTagCountOrderByAggregateInputObjectZodSchema = makeSchema();
