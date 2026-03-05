import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithoutTagInputObjectSchema as StudyItemTagUpdateWithoutTagInputObjectSchema } from './StudyItemTagUpdateWithoutTagInput.schema';
import { StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema as StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedUpdateWithoutTagInput.schema';
import { StudyItemTagCreateWithoutTagInputObjectSchema as StudyItemTagCreateWithoutTagInputObjectSchema } from './StudyItemTagCreateWithoutTagInput.schema';
import { StudyItemTagUncheckedCreateWithoutTagInputObjectSchema as StudyItemTagUncheckedCreateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudyItemTagUpdateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpsertWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpsertWithWhereUniqueWithoutTagInput>;
export const StudyItemTagUpsertWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
