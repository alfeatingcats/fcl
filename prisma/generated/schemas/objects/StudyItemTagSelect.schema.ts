import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemArgsObjectSchema as StudyItemArgsObjectSchema } from './StudyItemArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  studyItem: z.union([z.boolean(), z.lazy(() => StudyItemArgsObjectSchema)]).optional(),
  studyItemId: z.boolean().optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional(),
  tagId: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const StudyItemTagSelectObjectSchema: z.ZodType<Prisma.StudyItemTagSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagSelect>;
export const StudyItemTagSelectObjectZodSchema = makeSchema();
