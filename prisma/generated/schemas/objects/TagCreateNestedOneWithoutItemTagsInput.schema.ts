import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutItemTagsInputObjectSchema as TagCreateWithoutItemTagsInputObjectSchema } from './TagCreateWithoutItemTagsInput.schema';
import { TagUncheckedCreateWithoutItemTagsInputObjectSchema as TagUncheckedCreateWithoutItemTagsInputObjectSchema } from './TagUncheckedCreateWithoutItemTagsInput.schema';
import { TagCreateOrConnectWithoutItemTagsInputObjectSchema as TagCreateOrConnectWithoutItemTagsInputObjectSchema } from './TagCreateOrConnectWithoutItemTagsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutItemTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutItemTagsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCreateNestedOneWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedOneWithoutItemTagsInput>;
export const TagCreateNestedOneWithoutItemTagsInputObjectZodSchema = makeSchema();
