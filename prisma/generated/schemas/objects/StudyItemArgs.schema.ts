import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './StudyItemSelect.schema';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './StudyItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudyItemSelectObjectSchema).optional(),
  include: z.lazy(() => StudyItemIncludeObjectSchema).optional()
}).strict();
export const StudyItemArgsObjectSchema = makeSchema();
export const StudyItemArgsObjectZodSchema = makeSchema();
