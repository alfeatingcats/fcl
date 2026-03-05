import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagFindManySelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagSelect>;

export const TagFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TagFindManySchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({ select: TagFindManySelectSchema.optional(), include: TagIncludeObjectSchema.optional(), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagFindManyArgs>;

export const TagFindManyZodSchema = z.object({ select: TagFindManySelectSchema.optional(), include: TagIncludeObjectSchema.optional(), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict();