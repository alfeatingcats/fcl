import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StudyItemTagCountAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCountAggregateInputType>;
export const StudyItemTagCountAggregateInputObjectZodSchema = makeSchema();
