import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagUpdateManyMutationInputObjectSchema as TagUpdateManyMutationInputObjectSchema } from './objects/TagUpdateManyMutationInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';

export const TagUpdateManySchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({ data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagUpdateManyArgs>;

export const TagUpdateManyZodSchema = z.object({ data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema.optional() }).strict();