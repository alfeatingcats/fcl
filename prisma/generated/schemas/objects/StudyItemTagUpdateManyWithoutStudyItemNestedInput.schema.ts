import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateWithoutStudyItemInputObjectSchema as StudyItemTagCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutStudyItemInput.schema';
import { StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema as StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateOrConnectWithoutStudyItemInput.schema';
import { StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema as StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema } from './StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInput.schema';
import { StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema as StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema } from './StudyItemTagCreateManyStudyItemInputEnvelope.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema as StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema } from './StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInput.schema';
import { StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectSchema as StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectSchema } from './StudyItemTagUpdateManyWithWhereWithoutStudyItemInput.schema';
import { StudyItemTagScalarWhereInputObjectSchema as StudyItemTagScalarWhereInputObjectSchema } from './StudyItemTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema).array(), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudyItemTagScalarWhereInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemTagUpdateManyWithoutStudyItemNestedInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateManyWithoutStudyItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateManyWithoutStudyItemNestedInput>;
export const StudyItemTagUpdateManyWithoutStudyItemNestedInputObjectZodSchema = makeSchema();
