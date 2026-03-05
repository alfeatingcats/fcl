import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutCreatedByInputObjectSchema as StudyItemCreateWithoutCreatedByInputObjectSchema } from './StudyItemCreateWithoutCreatedByInput.schema';
import { StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema as StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedCreateWithoutCreatedByInput.schema';
import { StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema as StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema } from './StudyItemCreateOrConnectWithoutCreatedByInput.schema';
import { StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StudyItemUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { StudyItemCreateManyCreatedByInputEnvelopeObjectSchema as StudyItemCreateManyCreatedByInputEnvelopeObjectSchema } from './StudyItemCreateManyCreatedByInputEnvelope.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './StudyItemUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectSchema as StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './StudyItemUpdateManyWithWhereWithoutCreatedByInput.schema';
import { StudyItemScalarWhereInputObjectSchema as StudyItemScalarWhereInputObjectSchema } from './StudyItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudyItemWhereUniqueInputObjectSchema), z.lazy(() => StudyItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudyItemWhereUniqueInputObjectSchema), z.lazy(() => StudyItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudyItemWhereUniqueInputObjectSchema), z.lazy(() => StudyItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudyItemWhereUniqueInputObjectSchema), z.lazy(() => StudyItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudyItemScalarWhereInputObjectSchema), z.lazy(() => StudyItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.StudyItemUncheckedUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const StudyItemUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
