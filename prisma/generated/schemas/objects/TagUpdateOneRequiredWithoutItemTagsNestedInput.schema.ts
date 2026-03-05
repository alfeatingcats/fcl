import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutItemTagsInputObjectSchema as TagCreateWithoutItemTagsInputObjectSchema } from './TagCreateWithoutItemTagsInput.schema';
import { TagUncheckedCreateWithoutItemTagsInputObjectSchema as TagUncheckedCreateWithoutItemTagsInputObjectSchema } from './TagUncheckedCreateWithoutItemTagsInput.schema';
import { TagCreateOrConnectWithoutItemTagsInputObjectSchema as TagCreateOrConnectWithoutItemTagsInputObjectSchema } from './TagCreateOrConnectWithoutItemTagsInput.schema';
import { TagUpsertWithoutItemTagsInputObjectSchema as TagUpsertWithoutItemTagsInputObjectSchema } from './TagUpsertWithoutItemTagsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateToOneWithWhereWithoutItemTagsInputObjectSchema as TagUpdateToOneWithWhereWithoutItemTagsInputObjectSchema } from './TagUpdateToOneWithWhereWithoutItemTagsInput.schema';
import { TagUpdateWithoutItemTagsInputObjectSchema as TagUpdateWithoutItemTagsInputObjectSchema } from './TagUpdateWithoutItemTagsInput.schema';
import { TagUncheckedUpdateWithoutItemTagsInputObjectSchema as TagUncheckedUpdateWithoutItemTagsInputObjectSchema } from './TagUncheckedUpdateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutItemTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutItemTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutItemTagsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateToOneWithWhereWithoutItemTagsInputObjectSchema), z.lazy(() => TagUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutItemTagsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutItemTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateOneRequiredWithoutItemTagsNestedInput>;
export const TagUpdateOneRequiredWithoutItemTagsNestedInputObjectZodSchema = makeSchema();
