import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagStudyItemIdTagIdCompoundUniqueInputObjectSchema as StudyItemTagStudyItemIdTagIdCompoundUniqueInputObjectSchema } from './StudyItemTagStudyItemIdTagIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  studyItemId_tagId: z.lazy(() => StudyItemTagStudyItemIdTagIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const StudyItemTagWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudyItemTagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagWhereUniqueInput>;
export const StudyItemTagWhereUniqueInputObjectZodSchema = makeSchema();
