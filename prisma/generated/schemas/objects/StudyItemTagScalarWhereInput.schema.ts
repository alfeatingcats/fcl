import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const studyitemtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyItemTagScalarWhereInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyItemTagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyItemTagScalarWhereInputObjectSchema), z.lazy(() => StudyItemTagScalarWhereInputObjectSchema).array()]).optional(),
  studyItemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudyItemTagScalarWhereInputObjectSchema: z.ZodType<Prisma.StudyItemTagScalarWhereInput> = studyitemtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudyItemTagScalarWhereInput>;
export const StudyItemTagScalarWhereInputObjectZodSchema = studyitemtagscalarwhereinputSchema;
