import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  studyItemId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const StudyItemTagMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagMaxOrderByAggregateInput>;
export const StudyItemTagMaxOrderByAggregateInputObjectZodSchema = makeSchema();
