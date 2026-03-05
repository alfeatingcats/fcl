import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyItemTagUncheckedCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedCreateWithoutTagInput>;
export const StudyItemTagUncheckedCreateWithoutTagInputObjectZodSchema = makeSchema();
