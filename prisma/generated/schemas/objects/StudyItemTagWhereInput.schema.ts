import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StudyItemScalarRelationFilterObjectSchema as StudyItemScalarRelationFilterObjectSchema } from './StudyItemScalarRelationFilter.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './StudyItemWhereInput.schema';
import { TagScalarRelationFilterObjectSchema as TagScalarRelationFilterObjectSchema } from './TagScalarRelationFilter.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const studyitemtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudyItemTagWhereInputObjectSchema), z.lazy(() => StudyItemTagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudyItemTagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudyItemTagWhereInputObjectSchema), z.lazy(() => StudyItemTagWhereInputObjectSchema).array()]).optional(),
  studyItemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  studyItem: z.union([z.lazy(() => StudyItemScalarRelationFilterObjectSchema), z.lazy(() => StudyItemWhereInputObjectSchema)]).optional(),
  tag: z.union([z.lazy(() => TagScalarRelationFilterObjectSchema), z.lazy(() => TagWhereInputObjectSchema)]).optional()
}).strict();
export const StudyItemTagWhereInputObjectSchema: z.ZodType<Prisma.StudyItemTagWhereInput> = studyitemtagwhereinputSchema as unknown as z.ZodType<Prisma.StudyItemTagWhereInput>;
export const StudyItemTagWhereInputObjectZodSchema = studyitemtagwhereinputSchema;
