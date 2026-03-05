import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagUpdateManyMutationInputObjectSchema as TagUpdateManyMutationInputObjectSchema } from './objects/TagUpdateManyMutationInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';

export const TagUpdateManyAndReturnSchema: z.ZodType<Prisma.TagUpdateManyAndReturnArgs> = z.object({ select: TagSelectObjectSchema.optional(), data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagUpdateManyAndReturnArgs>;

export const TagUpdateManyAndReturnZodSchema = z.object({ select: TagSelectObjectSchema.optional(), data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema.optional() }).strict();