import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const StudyItemTagMaxAggregateInputObjectSchema: z.ZodType<Prisma.StudyItemTagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagMaxAggregateInputType>;
export const StudyItemTagMaxAggregateInputObjectZodSchema = makeSchema();
