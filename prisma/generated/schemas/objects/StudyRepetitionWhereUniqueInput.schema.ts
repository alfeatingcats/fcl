import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInputObjectSchema as StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInputObjectSchema } from './StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  studyItemId_repetitionNumber: z.lazy(() => StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInputObjectSchema).optional()
}).strict();
export const StudyRepetitionWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudyRepetitionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionWhereUniqueInput>;
export const StudyRepetitionWhereUniqueInputObjectZodSchema = makeSchema();
