import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateWithoutTagInputObjectSchema as StudyItemTagCreateWithoutTagInputObjectSchema } from './StudyItemTagCreateWithoutTagInput.schema';
import { StudyItemTagUncheckedCreateWithoutTagInputObjectSchema as StudyItemTagUncheckedCreateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutTagInput.schema';
import { StudyItemTagCreateOrConnectWithoutTagInputObjectSchema as StudyItemTagCreateOrConnectWithoutTagInputObjectSchema } from './StudyItemTagCreateOrConnectWithoutTagInput.schema';
import { StudyItemTagCreateManyTagInputEnvelopeObjectSchema as StudyItemTagCreateManyTagInputEnvelopeObjectSchema } from './StudyItemTagCreateManyTagInputEnvelope.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemTagUncheckedCreateNestedManyWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedCreateNestedManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedCreateNestedManyWithoutTagInput>;
export const StudyItemTagUncheckedCreateNestedManyWithoutTagInputObjectZodSchema = makeSchema();
