import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagCreateManyInputObjectSchema as StudyItemTagCreateManyInputObjectSchema } from './objects/StudyItemTagCreateManyInput.schema';

export const StudyItemTagCreateManySchema: z.ZodType<Prisma.StudyItemTagCreateManyArgs> = z.object({ data: z.union([ StudyItemTagCreateManyInputObjectSchema, z.array(StudyItemTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyArgs>;

export const StudyItemTagCreateManyZodSchema = z.object({ data: z.union([ StudyItemTagCreateManyInputObjectSchema, z.array(StudyItemTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();