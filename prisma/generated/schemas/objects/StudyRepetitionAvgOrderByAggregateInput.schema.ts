import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  repetitionNumber: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional()
}).strict();
export const StudyRepetitionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionAvgOrderByAggregateInput>;
export const StudyRepetitionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
