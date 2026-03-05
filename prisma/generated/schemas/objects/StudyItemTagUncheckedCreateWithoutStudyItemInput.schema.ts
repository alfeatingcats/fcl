import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedCreateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedCreateWithoutStudyItemInput>;
export const StudyItemTagUncheckedCreateWithoutStudyItemInputObjectZodSchema = makeSchema();
