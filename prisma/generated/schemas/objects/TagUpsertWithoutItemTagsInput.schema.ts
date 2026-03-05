import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateWithoutItemTagsInputObjectSchema as TagUpdateWithoutItemTagsInputObjectSchema } from './TagUpdateWithoutItemTagsInput.schema';
import { TagUncheckedUpdateWithoutItemTagsInputObjectSchema as TagUncheckedUpdateWithoutItemTagsInputObjectSchema } from './TagUncheckedUpdateWithoutItemTagsInput.schema';
import { TagCreateWithoutItemTagsInputObjectSchema as TagCreateWithoutItemTagsInputObjectSchema } from './TagCreateWithoutItemTagsInput.schema';
import { TagUncheckedCreateWithoutItemTagsInputObjectSchema as TagUncheckedCreateWithoutItemTagsInputObjectSchema } from './TagUncheckedCreateWithoutItemTagsInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutItemTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutItemTagsInputObjectSchema)]),
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagUpsertWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithoutItemTagsInput>;
export const TagUpsertWithoutItemTagsInputObjectZodSchema = makeSchema();
