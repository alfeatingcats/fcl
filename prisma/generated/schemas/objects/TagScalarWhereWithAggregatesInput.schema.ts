import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  color: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = tagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereWithAggregatesInput>;
export const TagScalarWhereWithAggregatesInputObjectZodSchema = tagscalarwherewithaggregatesinputSchema;
