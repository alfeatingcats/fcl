import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagOrderByWithRelationInputObjectSchema as StudyItemTagOrderByWithRelationInputObjectSchema } from './objects/StudyItemTagOrderByWithRelationInput.schema';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagScalarFieldEnumSchema } from './enums/StudyItemTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudyItemTagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.StudyItemTagSelect> = z.object({
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    tag: z.boolean().optional(),
    tagId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudyItemTagSelect>;

export const StudyItemTagFindFirstOrThrowSelectZodSchema = z.object({
    studyItem: z.boolean().optional(),
    studyItemId: z.boolean().optional(),
    tag: z.boolean().optional(),
    tagId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const StudyItemTagFindFirstOrThrowSchema: z.ZodType<Prisma.StudyItemTagFindFirstOrThrowArgs> = z.object({ select: StudyItemTagFindFirstOrThrowSelectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemTagScalarFieldEnumSchema, StudyItemTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagFindFirstOrThrowArgs>;

export const StudyItemTagFindFirstOrThrowZodSchema = z.object({ select: StudyItemTagFindFirstOrThrowSelectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), orderBy: z.union([StudyItemTagOrderByWithRelationInputObjectSchema, StudyItemTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemTagWhereInputObjectSchema.optional(), cursor: StudyItemTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemTagScalarFieldEnumSchema, StudyItemTagScalarFieldEnumSchema.array()]).optional() }).strict();