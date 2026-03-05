import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemCreateManyInputObjectSchema as StudyItemCreateManyInputObjectSchema } from './objects/StudyItemCreateManyInput.schema';

export const StudyItemCreateManyAndReturnSchema: z.ZodType<Prisma.StudyItemCreateManyAndReturnArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), data: z.union([ StudyItemCreateManyInputObjectSchema, z.array(StudyItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemCreateManyAndReturnArgs>;

export const StudyItemCreateManyAndReturnZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), data: z.union([ StudyItemCreateManyInputObjectSchema, z.array(StudyItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();