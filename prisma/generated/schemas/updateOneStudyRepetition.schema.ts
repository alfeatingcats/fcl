import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionUpdateInputObjectSchema as StudyRepetitionUpdateInputObjectSchema } from './objects/StudyRepetitionUpdateInput.schema';
import { StudyRepetitionUncheckedUpdateInputObjectSchema as StudyRepetitionUncheckedUpdateInputObjectSchema } from './objects/StudyRepetitionUncheckedUpdateInput.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';

export const StudyRepetitionUpdateOneSchema: z.ZodType<Prisma.StudyRepetitionUpdateArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), data: z.union([StudyRepetitionUpdateInputObjectSchema, StudyRepetitionUncheckedUpdateInputObjectSchema]), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateArgs>;

export const StudyRepetitionUpdateOneZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), data: z.union([StudyRepetitionUpdateInputObjectSchema, StudyRepetitionUncheckedUpdateInputObjectSchema]), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict();