import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagUpdateInputObjectSchema as TagUpdateInputObjectSchema } from './objects/TagUpdateInput.schema';
import { TagUncheckedUpdateInputObjectSchema as TagUncheckedUpdateInputObjectSchema } from './objects/TagUncheckedUpdateInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagUpdateOneSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), data: z.union([TagUpdateInputObjectSchema, TagUncheckedUpdateInputObjectSchema]), where: TagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagUpdateArgs>;

export const TagUpdateOneZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), data: z.union([TagUpdateInputObjectSchema, TagUncheckedUpdateInputObjectSchema]), where: TagWhereUniqueInputObjectSchema }).strict();