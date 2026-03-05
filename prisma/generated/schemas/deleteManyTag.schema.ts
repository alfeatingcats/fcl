import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';

export const TagDeleteManySchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({ where: TagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagDeleteManyArgs>;

export const TagDeleteManyZodSchema = z.object({ where: TagWhereInputObjectSchema.optional() }).strict();