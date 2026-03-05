import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';
import { StudyRepetitionCreateInputObjectSchema as StudyRepetitionCreateInputObjectSchema } from './objects/StudyRepetitionCreateInput.schema';
import { StudyRepetitionUncheckedCreateInputObjectSchema as StudyRepetitionUncheckedCreateInputObjectSchema } from './objects/StudyRepetitionUncheckedCreateInput.schema';
import { StudyRepetitionUpdateInputObjectSchema as StudyRepetitionUpdateInputObjectSchema } from './objects/StudyRepetitionUpdateInput.schema';
import { StudyRepetitionUncheckedUpdateInputObjectSchema as StudyRepetitionUncheckedUpdateInputObjectSchema } from './objects/StudyRepetitionUncheckedUpdateInput.schema';

export const StudyRepetitionUpsertOneSchema: z.ZodType<Prisma.StudyRepetitionUpsertArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema, create: z.union([ StudyRepetitionCreateInputObjectSchema, StudyRepetitionUncheckedCreateInputObjectSchema ]), update: z.union([ StudyRepetitionUpdateInputObjectSchema, StudyRepetitionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionUpsertArgs>;

export const StudyRepetitionUpsertOneZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema, create: z.union([ StudyRepetitionCreateInputObjectSchema, StudyRepetitionUncheckedCreateInputObjectSchema ]), update: z.union([ StudyRepetitionUpdateInputObjectSchema, StudyRepetitionUncheckedUpdateInputObjectSchema ]) }).strict();