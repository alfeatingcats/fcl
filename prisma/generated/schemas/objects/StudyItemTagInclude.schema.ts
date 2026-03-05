import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemArgsObjectSchema as StudyItemArgsObjectSchema } from './StudyItemArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  studyItem: z.union([z.boolean(), z.lazy(() => StudyItemArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const StudyItemTagIncludeObjectSchema: z.ZodType<Prisma.StudyItemTagInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagInclude>;
export const StudyItemTagIncludeObjectZodSchema = makeSchema();
