import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStatusFilterObjectSchema as EnumStatusFilterObjectSchema } from './EnumStatusFilter.schema';
import { StatusSchema } from '../enums/Status.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const studyitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyItemScalarWhereInputObjectSchema), z.lazy(() => StudyItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyItemScalarWhereInputObjectSchema), z.lazy(() => StudyItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  descriptionText: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumStatusFilterObjectSchema), StatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  completedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const StudyItemScalarWhereInputObjectSchema: z.ZodType<Prisma.StudyItemScalarWhereInput> = studyitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudyItemScalarWhereInput>;
export const StudyItemScalarWhereInputObjectZodSchema = studyitemscalarwhereinputSchema;
