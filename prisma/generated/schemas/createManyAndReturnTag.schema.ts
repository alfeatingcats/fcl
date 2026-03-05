import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagCreateManyInputObjectSchema as TagCreateManyInputObjectSchema } from './objects/TagCreateManyInput.schema';

export const TagCreateManyAndReturnSchema: z.ZodType<Prisma.TagCreateManyAndReturnArgs> = z.object({ select: TagSelectObjectSchema.optional(), data: z.union([ TagCreateManyInputObjectSchema, z.array(TagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagCreateManyAndReturnArgs>;

export const TagCreateManyAndReturnZodSchema = z.object({ select: TagSelectObjectSchema.optional(), data: z.union([ TagCreateManyInputObjectSchema, z.array(TagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();