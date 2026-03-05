import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';

export const StudyItemTagDeleteOneSchema: z.ZodType<Prisma.StudyItemTagDeleteArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemTagDeleteArgs>;

export const StudyItemTagDeleteOneZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict();