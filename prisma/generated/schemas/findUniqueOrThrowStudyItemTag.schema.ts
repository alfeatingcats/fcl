import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';

export const StudyItemTagFindUniqueOrThrowSchema: z.ZodType<Prisma.StudyItemTagFindUniqueOrThrowArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemTagFindUniqueOrThrowArgs>;

export const StudyItemTagFindUniqueOrThrowZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema }).strict();