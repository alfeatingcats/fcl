import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutRepetitionsInputObjectSchema as StudyItemCreateWithoutRepetitionsInputObjectSchema } from './StudyItemCreateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedCreateWithoutRepetitionsInput.schema';
import { StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema as StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema } from './StudyItemCreateOrConnectWithoutRepetitionsInput.schema';
import { StudyItemUpsertWithoutRepetitionsInputObjectSchema as StudyItemUpsertWithoutRepetitionsInputObjectSchema } from './StudyItemUpsertWithoutRepetitionsInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemUpdateToOneWithWhereWithoutRepetitionsInputObjectSchema as StudyItemUpdateToOneWithWhereWithoutRepetitionsInputObjectSchema } from './StudyItemUpdateToOneWithWhereWithoutRepetitionsInput.schema';
import { StudyItemUpdateWithoutRepetitionsInputObjectSchema as StudyItemUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUpdateWithoutRepetitionsInput.schema';
import { StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema as StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutRepetitionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudyItemCreateOrConnectWithoutRepetitionsInputObjectSchema).optional(),
  upsert: z.lazy(() => StudyItemUpsertWithoutRepetitionsInputObjectSchema).optional(),
  connect: z.lazy(() => StudyItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StudyItemUpdateToOneWithWhereWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUpdateWithoutRepetitionsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutRepetitionsInputObjectSchema)]).optional()
}).strict();
export const StudyItemUpdateOneRequiredWithoutRepetitionsNestedInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateOneRequiredWithoutRepetitionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateOneRequiredWithoutRepetitionsNestedInput>;
export const StudyItemUpdateOneRequiredWithoutRepetitionsNestedInputObjectZodSchema = makeSchema();
