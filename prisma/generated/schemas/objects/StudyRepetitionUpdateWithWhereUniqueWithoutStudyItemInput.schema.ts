import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionUpdateWithoutStudyItemInputObjectSchema as StudyRepetitionUpdateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUpdateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedUpdateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudyRepetitionUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInput>;
export const StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectZodSchema = makeSchema();
