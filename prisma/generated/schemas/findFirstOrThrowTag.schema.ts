import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagSelect>;

export const TagFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TagFindFirstOrThrowSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({ select: TagFindFirstOrThrowSelectSchema.optional(), include: TagIncludeObjectSchema.optional(), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagFindFirstOrThrowArgs>;

export const TagFindFirstOrThrowZodSchema = z.object({ select: TagFindFirstOrThrowSelectSchema.optional(), include: TagIncludeObjectSchema.optional(), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict();