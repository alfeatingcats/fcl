import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './objects/StudyItemInclude.schema';
import { StudyItemOrderByWithRelationInputObjectSchema as StudyItemOrderByWithRelationInputObjectSchema } from './objects/StudyItemOrderByWithRelationInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';
import { StudyItemScalarFieldEnumSchema } from './enums/StudyItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudyItemFindFirstSelectSchema: z.ZodType<Prisma.StudyItemSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    descriptionText: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    repetitions: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudyItemSelect>;

export const StudyItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    descriptionText: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    repetitions: z.boolean().optional(),
    itemTags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StudyItemFindFirstSchema: z.ZodType<Prisma.StudyItemFindFirstArgs> = z.object({ select: StudyItemFindFirstSelectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemScalarFieldEnumSchema, StudyItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemFindFirstArgs>;

export const StudyItemFindFirstZodSchema = z.object({ select: StudyItemFindFirstSelectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), orderBy: z.union([StudyItemOrderByWithRelationInputObjectSchema, StudyItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudyItemWhereInputObjectSchema.optional(), cursor: StudyItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudyItemScalarFieldEnumSchema, StudyItemScalarFieldEnumSchema.array()]).optional() }).strict();