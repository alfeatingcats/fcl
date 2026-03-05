import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemUpdateWithoutCreatedByInputObjectSchema as StudyItemUpdateWithoutCreatedByInputObjectSchema } from './StudyItemUpdateWithoutCreatedByInput.schema';
import { StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema as StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateWithWhereUniqueWithoutCreatedByInput>;
export const StudyItemUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
