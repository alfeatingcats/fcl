import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCreateInputObjectSchema as TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';
import { TagUncheckedCreateInputObjectSchema as TagUncheckedCreateInputObjectSchema } from './objects/TagUncheckedCreateInput.schema';
import { TagUpdateInputObjectSchema as TagUpdateInputObjectSchema } from './objects/TagUpdateInput.schema';
import { TagUncheckedUpdateInputObjectSchema as TagUncheckedUpdateInputObjectSchema } from './objects/TagUncheckedUpdateInput.schema';

export const TagUpsertOneSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema, create: z.union([ TagCreateInputObjectSchema, TagUncheckedCreateInputObjectSchema ]), update: z.union([ TagUpdateInputObjectSchema, TagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TagUpsertArgs>;

export const TagUpsertOneZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema, create: z.union([ TagCreateInputObjectSchema, TagUncheckedCreateInputObjectSchema ]), update: z.union([ TagUpdateInputObjectSchema, TagUncheckedUpdateInputObjectSchema ]) }).strict();