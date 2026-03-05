import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  descriptionText: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  completedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional()
}).strict();
export const StudyItemMinAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemMinAggregateInputType>;
export const StudyItemMinAggregateInputObjectZodSchema = makeSchema();
