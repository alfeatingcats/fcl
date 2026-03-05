import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TagWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagScalarRelationFilterObjectSchema: z.ZodType<Prisma.TagScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagScalarRelationFilter>;
export const TagScalarRelationFilterObjectZodSchema = makeSchema();
