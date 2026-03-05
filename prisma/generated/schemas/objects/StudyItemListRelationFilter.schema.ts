import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StudyItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudyItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudyItemWhereInputObjectSchema).optional()
}).strict();
export const StudyItemListRelationFilterObjectSchema: z.ZodType<Prisma.StudyItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemListRelationFilter>;
export const StudyItemListRelationFilterObjectZodSchema = makeSchema();
