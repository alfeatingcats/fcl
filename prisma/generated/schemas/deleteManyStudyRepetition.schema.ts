import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';

export const StudyRepetitionDeleteManySchema: z.ZodType<Prisma.StudyRepetitionDeleteManyArgs> = z.object({ where: StudyRepetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionDeleteManyArgs>;

export const StudyRepetitionDeleteManyZodSchema = z.object({ where: StudyRepetitionWhereInputObjectSchema.optional() }).strict();