import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';

export const StudyItemTagFindUniqueSchema: z.ZodType<Prisma.StudyItemTagFindUniqueArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemTagFindUniqueArgs>;

export const StudyItemTagFindUniqueZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict();