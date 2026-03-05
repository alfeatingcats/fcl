import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  repetitionNumber: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional()
}).strict();
export const StudyRepetitionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionSumOrderByAggregateInput>;
export const StudyRepetitionSumOrderByAggregateInputObjectZodSchema = makeSchema();
