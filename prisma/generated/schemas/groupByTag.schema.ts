import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagOrderByWithAggregationInputObjectSchema as TagOrderByWithAggregationInputObjectSchema } from './objects/TagOrderByWithAggregationInput.schema';
import { TagScalarWhereWithAggregatesInputObjectSchema as TagScalarWhereWithAggregatesInputObjectSchema } from './objects/TagScalarWhereWithAggregatesInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';
import { TagCountAggregateInputObjectSchema as TagCountAggregateInputObjectSchema } from './objects/TagCountAggregateInput.schema';
import { TagMinAggregateInputObjectSchema as TagMinAggregateInputObjectSchema } from './objects/TagMinAggregateInput.schema';
import { TagMaxAggregateInputObjectSchema as TagMaxAggregateInputObjectSchema } from './objects/TagMaxAggregateInput.schema';

export const TagGroupBySchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({ where: TagWhereInputObjectSchema.optional(), orderBy: z.union([TagOrderByWithAggregationInputObjectSchema, TagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TagScalarFieldEnumSchema), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagGroupByArgs>;

export const TagGroupByZodSchema = z.object({ where: TagWhereInputObjectSchema.optional(), orderBy: z.union([TagOrderByWithAggregationInputObjectSchema, TagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TagScalarFieldEnumSchema), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional() }).strict();