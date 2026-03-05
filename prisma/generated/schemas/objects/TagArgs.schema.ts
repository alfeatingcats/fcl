import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagSelectObjectSchema as TagSelectObjectSchema } from './TagSelect.schema';
import { TagIncludeObjectSchema as TagIncludeObjectSchema } from './TagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagSelectObjectSchema).optional(),
  include: z.lazy(() => TagIncludeObjectSchema).optional()
}).strict();
export const TagArgsObjectSchema = makeSchema();
export const TagArgsObjectZodSchema = makeSchema();
