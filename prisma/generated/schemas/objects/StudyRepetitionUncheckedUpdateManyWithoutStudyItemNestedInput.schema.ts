import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionCreateWithoutStudyItemInputObjectSchema as StudyRepetitionCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateWithoutStudyItemInput.schema';
import { StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedCreateWithoutStudyItemInput.schema';
import { StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema as StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateOrConnectWithoutStudyItemInput.schema';
import { StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema as StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema } from './StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInput.schema';
import { StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema as StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema } from './StudyRepetitionCreateManyStudyItemInputEnvelope.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema as StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema } from './StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInput.schema';
import { StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectSchema as StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectSchema } from './StudyRepetitionUpdateManyWithWhereWithoutStudyItemInput.schema';
import { StudyRepetitionScalarWhereInputObjectSchema as StudyRepetitionScalarWhereInputObjectSchema } from './StudyRepetitionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionCreateWithoutStudyItemInputObjectSchema).array(), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionCreateOrConnectWithoutStudyItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema), z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema), z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema), z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema), z.lazy(() => StudyRepetitionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema), z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInput>;
export const StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInputObjectZodSchema = makeSchema();
