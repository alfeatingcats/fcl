import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagUpdateManyMutationInputObjectSchema as StudyItemTagUpdateManyMutationInputObjectSchema } from './objects/StudyItemTagUpdateManyMutationInput.schema';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';

export const StudyItemTagUpdateManySchema: z.ZodType<Prisma.StudyItemTagUpdateManyArgs> = z.object({ data: StudyItemTagUpdateManyMutationInputObjectSchema, where: StudyItemTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagUpdateManyArgs>;

export const StudyItemTagUpdateManyZodSchema = z.object({ data: StudyItemTagUpdateManyMutationInputObjectSchema, where: StudyItemTagWhereInputObjectSchema.optional() }).strict();