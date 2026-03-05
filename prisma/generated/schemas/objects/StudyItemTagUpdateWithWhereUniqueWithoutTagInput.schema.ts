import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithoutTagInputObjectSchema as StudyItemTagUpdateWithoutTagInputObjectSchema } from './StudyItemTagUpdateWithoutTagInput.schema';
import { StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema as StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedUpdateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemTagUpdateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateWithoutTagInputObjectSchema)])
}).strict();
export const StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateWithWhereUniqueWithoutTagInput>;
export const StudyItemTagUpdateWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
