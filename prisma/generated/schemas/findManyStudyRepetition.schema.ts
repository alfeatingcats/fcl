import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionOrderByWithRelationInputObjectSchema as StudyRepetitionOrderByWithRelationInputObjectSchema } from './objects/StudyRepetitionOrderByWithRelationInput.schema';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionScalarFieldEnumSchema } from './enums/StudyRepetitionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudyRepetitionFindManySelectSchema: z.ZodType<Prisma.StudyRepetitionSelect> = z.object({
    id: z.boolean().optional(),
    repetitionNumber: z.boolean().optional(),
    scheduledAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    status: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionSelect>;

export const StudyRepetitionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    repetitionNumber: z.boolean().optional(),
    scheduledAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    status: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const StudyRepetitionFindManySchema: z.ZodType<Prisma.StudyRepetitionFindManyArgs> = z.object({ select: StudyRepetitionFindManySelectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyRepetitionScalarFieldEnumSchema, StudyRepetitionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionFindManyArgs>;

export const StudyRepetitionFindManyZodSchema = z.object({ select: StudyRepetitionFindManySelectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyRepetitionScalarFieldEnumSchema, StudyRepetitionScalarFieldEnumSchema.array()]).optional() }).strict();