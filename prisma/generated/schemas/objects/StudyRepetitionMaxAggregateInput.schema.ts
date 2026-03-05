import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  repetitionNumber: z.literal(true).optional(),
  scheduledAt: z.literal(true).optional(),
  completedAt: z.literal(true).optional(),
  status: z.literal(true).optional(),
  difficulty: z.literal(true).optional(),
  studyItemId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StudyRepetitionMaxAggregateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionMaxAggregateInputType>;
export const StudyRepetitionMaxAggregateInputObjectZodSchema = makeSchema();
