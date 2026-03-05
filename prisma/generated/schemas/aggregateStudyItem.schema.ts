import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemOrderByWithRelationInputObjectSchema as StudyItemOrderByWithRelationInputObjectSchema } from './objects/StudyItemOrderByWithRelationInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';
import { StudyItemCountAggregateInputObjectSchema as StudyItemCountAggregateInputObjectSchema } from './objects/StudyItemCountAggregateInput.schema';
import { StudyItemMinAggregateInputObjectSchema as StudyItemMinAggregateInputObjectSchema } from './objects/StudyItemMinAggregateInput.schema';
import { StudyItemMaxAggregateInputObjectSchema as StudyItemMaxAggregateInputObjectSchema } from './objects/StudyItemMaxAggregateInput.schema';

export const StudyItemAggregateSchema: z.ZodType<Prisma.StudyItemAggregateArgs> = z.object({ orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudyItemCountAggregateInputObjectSchema ]).optional(), _min: StudyItemMinAggregateInputObjectSchema.optional(), _max: StudyItemMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemAggregateArgs>;

export const StudyItemAggregateZodSchema = z.object({ orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudyItemCountAggregateInputObjectSchema ]).optional(), _min: StudyItemMinAggregateInputObjectSchema.optional(), _max: StudyItemMaxAggregateInputObjectSchema.optional() }).strict();