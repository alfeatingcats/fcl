import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './objects/StudyItemInclude.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './objects/StudyItemWhereUniqueInput.schema';
import { StudyItemCreateInputObjectSchema as StudyItemCreateInputObjectSchema } from './objects/StudyItemCreateInput.schema';
import { StudyItemUncheckedCreateInputObjectSchema as StudyItemUncheckedCreateInputObjectSchema } from './objects/StudyItemUncheckedCreateInput.schema';
import { StudyItemUpdateInputObjectSchema as StudyItemUpdateInputObjectSchema } from './objects/StudyItemUpdateInput.schema';
import { StudyItemUncheckedUpdateInputObjectSchema as StudyItemUncheckedUpdateInputObjectSchema } from './objects/StudyItemUncheckedUpdateInput.schema';

export const StudyItemUpsertOneSchema: z.ZodType<Prisma.StudyItemUpsertArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), where: StudyItemWhereUniqueInputObjectSchema, create: z.union([ StudyItemCreateInputObjectSchema, StudyItemUncheckedCreateInputObjectSchema ]), update: z.union([ StudyItemUpdateInputObjectSchema, StudyItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudyItemUpsertArgs>;

export const StudyItemUpsertOneZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), where: StudyItemWhereUniqueInputObjectSchema, create: z.union([ StudyItemCreateInputObjectSchema, StudyItemUncheckedCreateInputObjectSchema ]), update: z.union([ StudyItemUpdateInputObjectSchema, StudyItemUncheckedUpdateInputObjectSchema ]) }).strict();