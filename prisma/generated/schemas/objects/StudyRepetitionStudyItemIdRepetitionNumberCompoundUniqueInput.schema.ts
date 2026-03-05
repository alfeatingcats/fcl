import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studyItemId: z.string(),
  repetitionNumber: z.number().int()
}).strict();
export const StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInput>;
export const StudyRepetitionStudyItemIdRepetitionNumberCompoundUniqueInputObjectZodSchema = makeSchema();
