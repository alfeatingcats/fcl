import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionCreateInputObjectSchema as StudyRepetitionCreateInputObjectSchema } from './objects/StudyRepetitionCreateInput.schema';
import { StudyRepetitionUncheckedCreateInputObjectSchema as StudyRepetitionUncheckedCreateInputObjectSchema } from './objects/StudyRepetitionUncheckedCreateInput.schema';

export const StudyRepetitionCreateOneSchema: z.ZodType<Prisma.StudyRepetitionCreateArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), data: z.union([StudyRepetitionCreateInputObjectSchema, StudyRepetitionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionCreateArgs>;

export const StudyRepetitionCreateOneZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), data: z.union([StudyRepetitionCreateInputObjectSchema, StudyRepetitionUncheckedCreateInputObjectSchema]) }).strict();