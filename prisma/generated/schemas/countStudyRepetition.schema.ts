import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionOrderByWithRelationInputObjectSchema as StudyRepetitionOrderByWithRelationInputObjectSchema } from './objects/StudyRepetitionOrderByWithRelationInput.schema';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionCountAggregateInputObjectSchema as StudyRepetitionCountAggregateInputObjectSchema } from './objects/StudyRepetitionCountAggregateInput.schema';

export const StudyRepetitionCountSchema: z.ZodType<Prisma.StudyRepetitionCountArgs> = z.object({ orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyRepetitionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionCountArgs>;

export const StudyRepetitionCountZodSchema = z.object({ orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudyRepetitionCountAggregateInputObjectSchema ]).optional() }).strict();