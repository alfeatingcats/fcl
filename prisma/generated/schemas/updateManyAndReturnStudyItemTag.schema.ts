import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagUpdateManyMutationInputObjectSchema as StudyItemTagUpdateManyMutationInputObjectSchema } from './objects/StudyItemTagUpdateManyMutationInput.schema';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';

export const StudyItemTagUpdateManyAndReturnSchema: z.ZodType<Prisma.StudyItemTagUpdateManyAndReturnArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), data: StudyItemTagUpdateManyMutationInputObjectSchema, where: StudyItemTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagUpdateManyAndReturnArgs>;

export const StudyItemTagUpdateManyAndReturnZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), data: StudyItemTagUpdateManyMutationInputObjectSchema, where: StudyItemTagWhereInputObjectSchema.optional() }).strict();