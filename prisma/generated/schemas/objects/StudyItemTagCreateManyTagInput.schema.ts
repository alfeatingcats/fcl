import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyItemTagCreateManyTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateManyTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyTagInput>;
export const StudyItemTagCreateManyTagInputObjectZodSchema = makeSchema();
