import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagFindUniqueOrThrowSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagFindUniqueOrThrowArgs>;

export const TagFindUniqueOrThrowZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict();