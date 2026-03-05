import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionUpdateManyMutationInputObjectSchema as StudyRepetitionUpdateManyMutationInputObjectSchema } from './objects/StudyRepetitionUpdateManyMutationInput.schema';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';

export const StudyRepetitionUpdateManySchema: z.ZodType<Prisma.StudyRepetitionUpdateManyArgs> = z.object({ data: StudyRepetitionUpdateManyMutationInputObjectSchema, where: StudyRepetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateManyArgs>;

export const StudyRepetitionUpdateManyZodSchema = z.object({ data: StudyRepetitionUpdateManyMutationInputObjectSchema, where: StudyRepetitionWhereInputObjectSchema.optional() }).strict();