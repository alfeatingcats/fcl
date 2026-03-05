import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereInputObjectSchema as StudyItemTagWhereInputObjectSchema } from './StudyItemTagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StudyItemTagWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudyItemTagWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudyItemTagWhereInputObjectSchema).optional()
}).strict();
export const StudyItemTagListRelationFilterObjectSchema: z.ZodType<Prisma.StudyItemTagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagListRelationFilter>;
export const StudyItemTagListRelationFilterObjectZodSchema = makeSchema();
