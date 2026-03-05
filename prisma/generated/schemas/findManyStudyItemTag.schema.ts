import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagOrderByWithRelationInputObjectSchema as StudyItemTagOrderByWithRelationInputObjectSchema } from './objects/StudyItemTagOrderByWithRelationInput.schema';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagScalarFieldEnumSchema } from './enums/StudyItemTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudyItemTagFindManySelectSchema: z.ZodType<Prisma.StudyItemTagSelect> = z.object({
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    tag: z.boolean().optional(),
    tagId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudyItemTagSelect>;

export const StudyItemTagFindManySelectZodSchema = z.object({
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    tag: z.boolean().optional(),
    tagId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const StudyItemTagFindManySchema: z.ZodType<Prisma.StudyItemTagFindManyArgs> = z.object({ select: StudyItemTagFindManySelectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemTagScalarFieldEnumSchema, StudyItemTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagFindManyArgs>;

export const StudyItemTagFindManyZodSchema = z.object({ select: StudyItemTagFindManySelectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemTagScalarFieldEnumSchema, StudyItemTagScalarFieldEnumSchema.array()]).optional() }).strict();