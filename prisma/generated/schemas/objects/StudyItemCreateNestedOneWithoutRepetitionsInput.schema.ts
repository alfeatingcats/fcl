import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutRepetitionsInputObjectSchema as StudyItemCreateWithoutRepetitionsInputObjectSchema } from './StudyItemCreateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedCreateWithoutRepetitionsInput.schema';
import { StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema as StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema } from './StudyItemCreateOrConnectWithoutRepetitionsInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema).optional(),
  connect: z.lazy(() => StudyItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const StudyItemCreateNestedOneWithoutRepetitionsInputObjectSchema: z.ZodType<Prisma.StudyItemCreateNestedOneWithoutRepetitionsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateNestedOneWithoutRepetitionsInput>;
export const StudyItemCreateNestedOneWithoutRepetitionsInputObjectZodSchema = makeSchema();
