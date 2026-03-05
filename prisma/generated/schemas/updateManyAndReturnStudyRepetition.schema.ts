import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionUpdateManyMutationInputObjectSchema as StudyRepetitionUpdateManyMutationInputObjectSchema } from './objects/StudyRepetitionUpdateManyMutationInput.schema';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './objects/StudyRepetitionWhereInput.schema';

export const StudyRepetitionUpdateManyAndReturnSchema: z.ZodType<Prisma.StudyRepetitionUpdateManyAndReturnArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), data: StudyRepetitionUpdateManyMutationInputObjectSchema, where: StudyRepetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateManyAndReturnArgs>;

export const StudyRepetitionUpdateManyAndReturnZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), data: StudyRepetitionUpdateManyMutationInputObjectSchema, where: StudyRepetitionWhereInputObjectSchema.optional() }).strict();