import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';

export const StudyItemDeleteManySchema: z.ZodType<Prisma.StudyItemDeleteManyArgs> = z.object({ where: StudyItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemDeleteManyArgs>;

export const StudyItemDeleteManyZodSchema = z.object({ where: StudyItemWhereInputObjectSchema.optional() }).strict();