import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionSelectObjectSchema as StudyRepetitionSelectObjectSchema } from './StudyRepetitionSelect.schema';
import { StudyRepetitionIncludeObjectSchema as StudyRepetitionIncludeObjectSchema } from './StudyRepetitionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudyRepetitionSelectObjectSchema).optional(),
  include: z.lazy(() => StudyRepetitionIncludeObjectSchema).optional()
}).strict();
export const StudyRepetitionArgsObjectSchema = makeSchema();
export const StudyRepetitionArgsObjectZodSchema = makeSchema();
