import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  descriptionText: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  completedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StudyItemCountAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCountAggregateInputType>;
export const StudyItemCountAggregateInputObjectZodSchema = makeSchema();
