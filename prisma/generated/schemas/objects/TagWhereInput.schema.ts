import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StudyItemTagListRelationFilterObjectSchema as StudyItemTagListRelationFilterObjectSchema } from './StudyItemTagListRelationFilter.schema'

const tagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  itemTags: z.lazy(() => StudyItemTagListRelationFilterObjectSchema).optional()
}).strict();
export const TagWhereInputObjectSchema: z.ZodType<Prisma.TagWhereInput> = tagwhereinputSchema as unknown as z.ZodType<Prisma.TagWhereInput>;
export const TagWhereInputObjectZodSchema = tagwhereinputSchema;
