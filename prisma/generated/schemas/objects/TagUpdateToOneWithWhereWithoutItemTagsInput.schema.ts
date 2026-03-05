import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TagUpdateWithoutItemTagsInputObjectSchema as TagUpdateWithoutItemTagsInputObjectSchema } from './TagUpdateWithoutItemTagsInput.schema';
import { TagUncheckedUpdateWithoutItemTagsInputObjectSchema as TagUncheckedUpdateWithoutItemTagsInputObjectSchema } from './TagUncheckedUpdateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutItemTagsInputObjectSchema)])
}).strict();
export const TagUpdateToOneWithWhereWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutItemTagsInput>;
export const TagUpdateToOneWithWhereWithoutItemTagsInputObjectZodSchema = makeSchema();
