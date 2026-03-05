import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagCreateManyInputObjectSchema as StudyItemTagCreateManyInputObjectSchema } from './objects/StudyItemTagCreateManyInput.schema';

export const StudyItemTagCreateManyAndReturnSchema: z.ZodType<Prisma.StudyItemTagCreateManyAndReturnArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), data: z.union([ StudyItemTagCreateManyInputObjectSchema, z.array(StudyItemTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyAndReturnArgs>;

export const StudyItemTagCreateManyAndReturnZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), data: z.union([ StudyItemTagCreateManyInputObjectSchema, z.array(StudyItemTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();