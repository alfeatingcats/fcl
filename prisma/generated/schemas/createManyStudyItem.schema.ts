import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemCreateManyInputObjectSchema as StudyItemCreateManyInputObjectSchema } from './objects/StudyItemCreateManyInput.schema';

export const StudyItemCreateManySchema: z.ZodType<Prisma.StudyItemCreateManyArgs> = z.object({ data: z.union([ StudyItemCreateManyInputObjectSchema, z.array(StudyItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemCreateManyArgs>;

export const StudyItemCreateManyZodSchema = z.object({ data: z.union([ StudyItemCreateManyInputObjectSchema, z.array(StudyItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();