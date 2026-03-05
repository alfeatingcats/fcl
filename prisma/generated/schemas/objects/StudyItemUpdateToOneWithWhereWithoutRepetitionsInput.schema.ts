import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema';
import { StudyItemUpdateWithoutRepetitionsInputObjectSchema as StudyItemUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUpdateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutRepetitionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StudyItemUpdateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema)])
}).strict();
export const StudyItemUpdateToOneWithWhereWithoutRepetitionsInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateToOneWithWhereWithoutRepetitionsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateToOneWithWhereWithoutRepetitionsInput>;
export const StudyItemUpdateToOneWithWhereWithoutRepetitionsInputObjectZodSchema = makeSchema();
