import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutItemTagsInputObjectSchema as TagCreateWithoutItemTagsInputObjectSchema } from './TagCreateWithoutItemTagsInput.schema';
import { TagUncheckedCreateWithoutItemTagsInputObjectSchema as TagUncheckedCreateWithoutItemTagsInputObjectSchema } from './TagUncheckedCreateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutItemTagsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutItemTagsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutItemTagsInput>;
export const TagCreateOrConnectWithoutItemTagsInputObjectZodSchema = makeSchema();
