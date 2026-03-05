import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './StudyItemTagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudyItemTagSelectObjectSchema).optional(),
  include: z.lazy(() => StudyItemTagIncludeObjectSchema).optional()
}).strict();
export const StudyItemTagArgsObjectSchema = makeSchema();
export const StudyItemTagArgsObjectZodSchema = makeSchema();
