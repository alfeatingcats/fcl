import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumRepetitionStatusWithAggregatesFilterObjectSchema as EnumRepetitionStatusWithAggregatesFilterObjectSchema } from './EnumRepetitionStatusWithAggregatesFilter.schema';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const studyrepetitionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyRepetitionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudyRepetitionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyRepetitionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyRepetitionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudyRepetitionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  repetitionNumber: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  scheduledAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  completedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumRepetitionStatusWithAggregatesFilterObjectSchema), RepetitionStatusSchema]).optional(),
  difficulty: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  studyItemId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudyRepetitionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StudyRepetitionScalarWhereWithAggregatesInput> = studyrepetitionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StudyRepetitionScalarWhereWithAggregatesInput>;
export const StudyRepetitionScalarWhereWithAggregatesInputObjectZodSchema = studyrepetitionscalarwherewithaggregatesinputSchema;
