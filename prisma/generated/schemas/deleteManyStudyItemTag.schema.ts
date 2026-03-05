import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './objects/StudyItemTagWhereInput.schema';

export const StudyItemTagDeleteManySchema: z.ZodType<Prisma.StudyItemTagDeleteManyArgs> = z.object({ where: StudyItemTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagDeleteManyArgs>;

export const StudyItemTagDeleteManyZodSchema = z.object({ where: StudyItemTagWhereInputObjectSchema.optional() }).strict();