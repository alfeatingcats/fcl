import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyRepetitionCreateManyInputObjectSchema as StudyRepetitionCreateManyInputObjectSchema } from './objects/StudyRepetitionCreateManyInput.schema';

export const StudyRepetitionCreateManySchema: z.ZodType<Prisma.StudyRepetitionCreateManyArgs> = z.object({ data: z.union([ StudyRepetitionCreateManyInputObjectSchema, z.array(StudyRepetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyRepetitionCreateManyArgs>;

export const StudyRepetitionCreateManyZodSchema = z.object({ data: z.union([ StudyRepetitionCreateManyInputObjectSchema, z.array(StudyRepetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();