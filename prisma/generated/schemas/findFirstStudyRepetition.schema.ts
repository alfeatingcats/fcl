import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionOrderByWithRelationInputObjectSchema as StudyRepetitionOrderByWithRelationInputObjectSchema } from './objects/StudyRepetitionOrderByWithRelationInput.schema';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionScalarFieldEnumSchema } from './enums/StudyRepetitionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudyRepetitionFindFirstSelectSchema: z.ZodType<Prisma.StudyRepetitionSelect> = z.object({
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

export const StudyRepetitionFindFirstSelectZodSchema = z.object({
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

export const StudyRepetitionFindFirstSchema: z.ZodType<Prisma.StudyRepetitionFindFirstArgs> = z.object({ select: StudyRepetitionFindFirstSelectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyRepetitionScalarFieldEnumSchema, StudyRepetitionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionFindFirstArgs>;

export const StudyRepetitionFindFirstZodSchema = z.object({ select: StudyRepetitionFindFirstSelectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), orderBy: z.union([StudyRepetitionOrderByWithRelationInputObjectSchema, StudyRepetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyRepetitionWhereInputObjectSchema.optional(), cursor: StudyRepetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyRepetitionScalarFieldEnumSchema, StudyRepetitionScalarFieldEnumSchema.array()]).optional() }).strict();