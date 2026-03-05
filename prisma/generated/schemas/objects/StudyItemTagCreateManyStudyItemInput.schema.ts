import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyItemTagCreateManyStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateManyStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyStudyItemInput>;
export const StudyItemTagCreateManyStudyItemInputObjectZodSchema = makeSchema();
