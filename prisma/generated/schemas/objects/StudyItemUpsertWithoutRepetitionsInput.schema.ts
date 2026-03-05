import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemUpdateWithoutRepetitionsInputObjectSchema as StudyItemUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUpdateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutRepetitionsInput.schema';
import { StudyItemCreateWithoutRepetitionsInputObjectSchema as StudyItemCreateWithoutRepetitionsInputObjectSchema } from './StudyItemCreateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedCreateWithoutRepetitionsInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StudyItemUpdateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyItemCreateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema)]),
  where: z.lazy(() => StudyItemWhereInputObjectSchema).optional()
}).strict();
export const StudyItemUpsertWithoutRepetitionsInputObjectSchema: z.ZodType<Prisma.StudyItemUpsertWithoutRepetitionsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpsertWithoutRepetitionsInput>;
export const StudyItemUpsertWithoutRepetitionsInputObjectZodSchema = makeSchema();
