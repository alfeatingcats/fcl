import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagCreateInputObjectSchema as TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';
import { TagUncheckedCreateInputObjectSchema as TagUncheckedCreateInputObjectSchema } from './objects/TagUncheckedCreateInput.schema';

export const TagCreateOneSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), data: z.union([TagCreateInputObjectSchema, TagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TagCreateArgs>;

export const TagCreateOneZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), data: z.union([TagCreateInputObjectSchema, TagUncheckedCreateInputObjectSchema]) }).strict();