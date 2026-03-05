import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';

export const StudyRepetitionDeleteOneSchema: z.ZodType<Prisma.StudyRepetitionDeleteArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionDeleteArgs>;

export const StudyRepetitionDeleteOneZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict();