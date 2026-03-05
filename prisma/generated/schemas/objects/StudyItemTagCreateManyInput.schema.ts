import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyItemTagCreateManyInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyInput>;
export const StudyItemTagCreateManyInputObjectZodSchema = makeSchema();
