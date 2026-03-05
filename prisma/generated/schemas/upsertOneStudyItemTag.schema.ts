import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './objects/StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagCreateInputObjectSchema as StudyItemTagCreateInputObjectSchema } from './objects/StudyItemTagCreateInput.schema';
import { StudyItemTagUncheckedCreateInputObjectSchema as StudyItemTagUncheckedCreateInputObjectSchema } from './objects/StudyItemTagUncheckedCreateInput.schema';
import { StudyItemTagUpdateInputObjectSchema as StudyItemTagUpdateInputObjectSchema } from './objects/StudyItemTagUpdateInput.schema';
import { StudyItemTagUncheckedUpdateInputObjectSchema as StudyItemTagUncheckedUpdateInputObjectSchema } from './objects/StudyItemTagUncheckedUpdateInput.schema';

export const StudyItemTagUpsertOneSchema: z.ZodType<Prisma.StudyItemTagUpsertArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema, create: z.union([ StudyItemTagCreateInputObjectSchema, StudyItemTagUncheckedCreateInputObjectSchema ]), update: z.union([ StudyItemTagUpdateInputObjectSchema, StudyItemTagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudyItemTagUpsertArgs>;

export const StudyItemTagUpsertOneZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), where: StudyItemTagWhereUniqueInputObjectSchema, create: z.union([ StudyItemTagCreateInputObjectSchema, StudyItemTagUncheckedCreateInputObjectSchema ]), update: z.union([ StudyItemTagUpdateInputObjectSchema, StudyItemTagUncheckedUpdateInputObjectSchema ]) }).strict();