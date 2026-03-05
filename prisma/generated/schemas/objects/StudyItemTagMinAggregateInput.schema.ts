import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const StudyItemTagMinAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagMinAggregateInputType>;
export const StudyItemTagMinAggregateInputObjectZodSchema = makeSchema();
