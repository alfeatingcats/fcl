import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './objects/StudyItemInclude.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';

export const StudyItemFindUniqueSchema: z.ZodType<Prisma.StudyItemFindUniqueArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), where: StudyItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemFindUniqueArgs>;

export const StudyItemFindUniqueZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), where: StudyItemWhereUniqueInputObjectSchema }).strict();