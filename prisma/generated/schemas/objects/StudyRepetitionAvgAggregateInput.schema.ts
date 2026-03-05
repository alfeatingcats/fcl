import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  repetitionNumber: z.literal(true).optional(),
  difficulty: z.literal(true).optional()
}).strict();
export const StudyRepetitionAvgAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionAvgAggregateInputType>;
export const StudyRepetitionAvgAggregateInputObjectZodSchema = makeSchema();
