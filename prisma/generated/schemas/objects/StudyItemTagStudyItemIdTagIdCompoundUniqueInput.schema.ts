import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.string(),
  tagId: z.string()
}).strict();
export const StudyItemTagStudyItemIdTagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StudyItemTagStudyItemIdTagIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagStudyItemIdTagIdCompoundUniqueInput>;
export const StudyItemTagStudyItemIdTagIdCompoundUniqueInputObjectZodSchema = makeSchema();
