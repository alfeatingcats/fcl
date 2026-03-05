import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagOrderByWithRelationInputObjectSchema as StudyItemTagOrderByWithRelationInputObjectSchema } from './objects/StudyItemTagOrderByWithRelationInput.schema';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagCountAggregateInputObjectSchema as StudyItemTagCountAggregateInputObjectSchema } from './objects/StudyItemTagCountAggregateInput.schema';

export const StudyItemTagCountSchema: z.ZodType<Prisma.StudyItemTagCountArgs> = z.object({ orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyItemTagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagCountArgs>;

export const StudyItemTagCountZodSchema = z.object({ orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyItemTagCountAggregateInputObjectSchema ]).optional() }).strict();