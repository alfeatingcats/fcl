import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagUpdateInputObjectSchema as StudyItemTagUpdateInputObjectSchema } from './objects/StudyItemTagUpdateInput.schema';
import { StudyItemTagUncheckedUpdateInputObjectSchema as StudyItemTagUncheckedUpdateInputObjectSchema } from './objects/StudyItemTagUncheckedUpdateInput.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';

export const StudyItemTagUpdateOneSchema: z.ZodType<Prisma.StudyItemTagUpdateArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), data: z.union([StudyItemTagUpdateInputObjectSchema, StudyItemTagUncheckedUpdateInputObjectSchema]), where: StudyItemTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemTagUpdateArgs>;

export const StudyItemTagUpdateOneZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), data: z.union([StudyItemTagUpdateInputObjectSchema, StudyItemTagUncheckedUpdateInputObjectSchema]), where: StudyItemTagWhereUniqueInputObjectSchema }).strict();