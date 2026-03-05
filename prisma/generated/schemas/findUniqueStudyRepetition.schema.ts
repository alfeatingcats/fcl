import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';

export const StudyRepetitionFindUniqueSchema: z.ZodType<Prisma.StudyRepetitionFindUniqueArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionFindUniqueArgs>;

export const StudyRepetitionFindUniqueZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict();