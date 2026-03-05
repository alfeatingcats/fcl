import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StudyItemTagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagOrderByRelationAggregateInput>;
export const StudyItemTagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
