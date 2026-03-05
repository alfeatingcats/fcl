import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StudyItemWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StudyItemWhereInputObjectSchema).optional()
}).strict();
export const StudyItemScalarRelationFilterObjectSchema: z.ZodType<Prisma.StudyItemScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemScalarRelationFilter>;
export const StudyItemScalarRelationFilterObjectZodSchema = makeSchema();
