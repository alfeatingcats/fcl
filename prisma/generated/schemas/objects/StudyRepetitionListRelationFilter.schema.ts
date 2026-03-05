import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionWhereInputObjectSchema as StudyRepetitionWhereInputObjectSchema } from './StudyRepetitionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StudyRepetitionWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudyRepetitionWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudyRepetitionWhereInputObjectSchema).optional()
}).strict();
export const StudyRepetitionListRelationFilterObjectSchema: z.ZodType<Prisma.StudyRepetitionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionListRelationFilter>;
export const StudyRepetitionListRelationFilterObjectZodSchema = makeSchema();
