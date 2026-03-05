import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateWithoutTagInputObjectSchema as StudyItemTagCreateWithoutTagInputObjectSchema } from './StudyItemTagCreateWithoutTagInput.schema';
import { StudyItemTagUncheckedCreateWithoutTagInputObjectSchema as StudyItemTagUncheckedCreateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutTagInput.schema';
import { StudyItemTagCreateOrConnectWithoutTagInputObjectSchema as StudyItemTagCreateOrConnectWithoutTagInputObjectSchema } from './StudyItemTagCreateOrConnectWithoutTagInput.schema';
import { StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectSchema as StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './StudyItemTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { StudyItemTagCreateManyTagInputEnvelopeObjectSchema as StudyItemTagCreateManyTagInputEnvelopeObjectSchema } from './StudyItemTagCreateManyTagInputEnvelope.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectSchema as StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './StudyItemTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { StudyItemTagUpdateManyWithWhereWithoutTagInputObjectSchema as StudyItemTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './StudyItemTagUpdateManyWithWhereWithoutTagInput.schema';
import { StudyItemTagScalarWhereInputObjectSchema as StudyItemTagScalarWhereInputObjectSchema } from './StudyItemTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudyItemTagUpdateManyWithWhereWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUpdateManyWithWhereWithoutTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudyItemTagScalarWhereInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedUpdateManyWithoutTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedUpdateManyWithoutTagNestedInput>;
export const StudyItemTagUncheckedUpdateManyWithoutTagNestedInputObjectZodSchema = makeSchema();
