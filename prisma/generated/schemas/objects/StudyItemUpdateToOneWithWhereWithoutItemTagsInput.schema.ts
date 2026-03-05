import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema';
import { StudyItemUpdateWithoutItemTagsInputObjectSchema as StudyItemUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUpdateWithoutItemTagsInput.schema';
import { StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema as StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StudyItemUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema)])
}).strict();
export const StudyItemUpdateToOneWithWhereWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateToOneWithWhereWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateToOneWithWhereWithoutItemTagsInput>;
export const StudyItemUpdateToOneWithWhereWithoutItemTagsInputObjectZodSchema = makeSchema();
