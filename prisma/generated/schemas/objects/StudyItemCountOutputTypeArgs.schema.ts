import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCountOutputTypeSelectObjectSchema as StudyItemCountOutputTypeSelectObjectSchema } from './StudyItemCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudyItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StudyItemCountOutputTypeArgsObjectSchema = makeSchema();
export const StudyItemCountOutputTypeArgsObjectZodSchema = makeSchema();
