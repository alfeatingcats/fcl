import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemCreateWithoutRepetitionsInputObjectSchema as StudyItemCreateWithoutRepetitionsInputObjectSchema } from './StudyItemCreateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedCreateWithoutRepetitionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyItemCreateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema)])
}).strict();
export const StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema: z.ZodType<Prisma.StudyItemCreateOrConnectWithoutRepetitionsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateOrConnectWithoutRepetitionsInput>;
export const StudyItemCreateOrConnectWithoutRepetitionsInputObjectZodSchema = makeSchema();
