import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  repetitionNumber: z.literal(true).optional(),
  difficulty: z.literal(true).optional()
}).strict();
export const StudyRepetitionSumAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionSumAggregateInputType>;
export const StudyRepetitionSumAggregateInputObjectZodSchema = makeSchema();
