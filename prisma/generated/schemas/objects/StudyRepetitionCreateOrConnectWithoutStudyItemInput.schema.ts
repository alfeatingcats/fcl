import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionCreateWithoutStudyItemInputObjectSchema as StudyRepetitionCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedCreateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionCreateOrConnectWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionCreateOrConnectWithoutStudyItemInput>;
export const StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectZodSchema = makeSchema();
