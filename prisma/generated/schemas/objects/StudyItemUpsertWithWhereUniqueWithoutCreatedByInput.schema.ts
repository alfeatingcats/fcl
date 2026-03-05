import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemUpdateWithoutCreatedByInputObjectSchema as StudyItemUpdateWithoutCreatedByInputObjectSchema } from './StudyItemUpdateWithoutCreatedByInput.schema';
import { StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema as StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedUpdateWithoutCreatedByInput.schema';
import { StudyItemCreateWithoutCreatedByInputObjectSchema as StudyItemCreateWithoutCreatedByInputObjectSchema } from './StudyItemCreateWithoutCreatedByInput.schema';
import { StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema as StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudyItemUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpsertWithWhereUniqueWithoutCreatedByInput>;
export const StudyItemUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
