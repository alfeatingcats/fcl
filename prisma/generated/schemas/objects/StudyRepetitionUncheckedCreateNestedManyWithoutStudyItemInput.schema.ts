import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionCreateWithoutStudyItemInputObjectSchema as StudyRepetitionCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedCreateWithoutStudyItemInput.schema';
import { StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema as StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateOrConnectWithoutStudyItemInput.schema';
import { StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema as StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema } from './StudyRepetitionCreateManyStudyItemInputEnvelope.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './StudyRepetitionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema).array(), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema), z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInput>;
export const StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInputObjectZodSchema = makeSchema();
