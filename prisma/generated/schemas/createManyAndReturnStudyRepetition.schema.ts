import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './objects/StudyRepetitionSelect.schema';
import { StudyRepetitionCreateManyInputObjectSchema as StudyRepetitionCreateManyInputObjectSchema } from './objects/StudyRepetitionCreateManyInput.schema';

export const StudyRepetitionCreateManyAndReturnSchema: z.ZodType<Prisma.StudyRepetitionCreateManyAndReturnArgs> = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), data: z.union([ StudyRepetitionCreateManyInputObjectSchema, z.array(StudyRepetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionCreateManyAndReturnArgs>;

export const StudyRepetitionCreateManyAndReturnZodSchema = z.object({ select: StudyRepetitionSelectObjectSchema.optional(), data: z.union([ StudyRepetitionCreateManyInputObjectSchema, z.array(StudyRepetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();