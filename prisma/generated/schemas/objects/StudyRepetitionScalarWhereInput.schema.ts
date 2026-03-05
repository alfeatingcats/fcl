import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumRepetitionStatusFilterObjectSchema as EnumRepetitionStatusFilterObjectSchema } from './EnumRepetitionStatusFilter.schema';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const studyrepetitionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema), z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema), z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  repetitionNumber: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  scheduledAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  completedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumRepetitionStatusFilterObjectSchema), RepetitionStatusSchema]).optional(),
  difficulty: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  studyItemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudyRepetitionScalarWhereInputObjectSchema: z.ZodType<Prisma.StudyRepetitionScalarWhereInput> = studyrepetitionscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudyRepetitionScalarWhereInput>;
export const StudyRepetitionScalarWhereInputObjectZodSchema = studyrepetitionscalarwhereinputSchema;
