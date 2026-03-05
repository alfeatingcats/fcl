import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutCreatedByInputObjectSchema as StudyItemCreateWithoutCreatedByInputObjectSchema } from './StudyItemCreateWithoutCreatedByInput.schema';
import { StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema as StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedCreateWithoutCreatedByInput.schema';
import { StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema as StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema } from './StudyItemCreateOrConnectWithoutCreatedByInput.schema';
import { StudyItemCreateManyCreatedByInputEnvelopeObjectSchema as StudyItemCreateManyCreatedByInputEnvelopeObjectSchema } from './StudyItemCreateManyCreatedByInputEnvelope.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudyItemWhereUniqueInputObjectSchema), z.lazy(() => StudyItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateNestedManyWithoutCreatedByInput>;
export const StudyItemCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
