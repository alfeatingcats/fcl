import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './objects/StudyRepetitionInclude.schema';
import { StudyRepetitionWhereUniqueInputObjectSchema as StudyRepetitionWhereUniqueInputObjectSchema } from './objects/StudyRepetitionWhereUniqueInput.schema';

export const StudyRepetitionFindUniqueOrThrowSchema: z.ZodType<Prisma.StudyRepetitionFindUniqueOrThrowArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionFindUniqueOrThrowArgs>;

export const StudyRepetitionFindUniqueOrThrowZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), include: StudyRepetitionIncludeObjectSchema.optional(), where: StudyRepetitionWhereUniqueInputObjectSchema }).strict();