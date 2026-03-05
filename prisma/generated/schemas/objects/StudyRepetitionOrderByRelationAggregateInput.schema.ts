import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StudyRepetitionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionOrderByRelationAggregateInput>;
export const StudyRepetitionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
