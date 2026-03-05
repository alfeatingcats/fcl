import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemUpdateWithoutItemTagsInputObjectSchema as StudyItemUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUpdateWithoutItemTagsInput.schema';
import { StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema as StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutItemTagsInput.schema';
import { StudyItemCreateWithoutItemTagsInputObjectSchema as StudyItemCreateWithoutItemTagsInputObjectSchema } from './StudyItemCreateWithoutItemTagsInput.schema';
import { StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema as StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedCreateWithoutItemTagsInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StudyItemUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyItemCreateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema)]),
  where: z.lazy(() => StudyItemWhereInputObjectSchema).optional()
}).strict();
export const StudyItemUpsertWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.StudyItemUpsertWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpsertWithoutItemTagsInput>;
export const StudyItemUpsertWithoutItemTagsInputObjectZodSchema = makeSchema();
