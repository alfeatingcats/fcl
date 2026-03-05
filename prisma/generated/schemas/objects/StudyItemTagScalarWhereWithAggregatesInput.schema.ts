import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const studyitemtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyItemTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyItemTagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyItemTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  studyItemId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudyItemTagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StudyItemTagScalarWhereWithAggregatesInput> = studyitemtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StudyItemTagScalarWhereWithAggregatesInput>;
export const StudyItemTagScalarWhereWithAggregatesInputObjectZodSchema = studyitemtagscalarwherewithaggregatesinputSchema;
