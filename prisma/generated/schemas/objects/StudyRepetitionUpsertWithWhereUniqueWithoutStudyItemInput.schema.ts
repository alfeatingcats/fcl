import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionUpdateWithoutStudyItemInputObjectSchema as StudyRepetitionUpdateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUpdateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedUpdateWithoutStudyItemInput.schema';
import { StudyRepetitionCreateWithoutStudyItemInputObjectSchema as StudyRepetitionCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedCreateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudyRepetitionUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedUpdateWithoutStudyItemInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInput>;
export const StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectZodSchema = makeSchema();
