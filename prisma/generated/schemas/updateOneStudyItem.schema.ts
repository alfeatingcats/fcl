import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './objects/StudyItemInclude.schema';
import { StudyItemUpdateInputObjectSchema as StudyItemUpdateInputObjectSchema } from './objects/StudyItemUpdateInput.schema';
import { StudyItemUncheckedUpdateInputObjectSchema as StudyItemUncheckedUpdateInputObjectSchema } from './objects/StudyItemUncheckedUpdateInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';

export const StudyItemUpdateOneSchema: z.ZodType<Prisma.StudyItemUpdateArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), data: z.union([StudyItemUpdateInputObjectSchema, StudyItemUncheckedUpdateInputObjectSchema]), where: StudyItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyItemUpdateArgs>;

export const StudyItemUpdateOneZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), data: z.union([StudyItemUpdateInputObjectSchema, StudyItemUncheckedUpdateInputObjectSchema]), where: StudyItemWhereUniqueInputObjectSchema }).strict();