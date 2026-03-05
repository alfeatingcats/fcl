import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemOrderByWithRelationInputObjectSchema as StudyItemOrderByWithRelationInputObjectSchema } from './objects/StudyItemOrderByWithRelationInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';
import { StudyItemCountAggregateInputObjectSchema as StudyItemCountAggregateInputObjectSchema } from './objects/StudyItemCountAggregateInput.schema';

export const StudyItemCountSchema: z.ZodType<Prisma.StudyItemCountArgs> = z.object({ orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemCountArgs>;

export const StudyItemCountZodSchema = z.object({ orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyItemCountAggregateInputObjectSchema ]).optional() }).strict();