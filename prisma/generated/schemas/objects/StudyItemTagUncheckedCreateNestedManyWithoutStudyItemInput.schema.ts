import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateWithoutStudyItemInputObjectSchema as StudyItemTagCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutStudyItemInput.schema';
import { StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema as StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateOrConnectWithoutStudyItemInput.schema';
import { StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema as StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema } from './StudyItemTagCreateManyStudyItemInputEnvelope.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema).array(), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema), z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInput>;
export const StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectZodSchema = makeSchema();
