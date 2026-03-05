import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemArgsObjectSchema as StudyItemArgsObjectSchema } from './StudyItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  repetitionNumber: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  studyItem: z.union([z.boolean(), z.lazy(() => StudyItemArgsObjectSchema)]).optional(),
  studyItemId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const StudyRepetitionSelectObjectSchema: z.ZodType<Prisma.StudyRepetitionSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionSelect>;
export const StudyRepetitionSelectObjectZodSchema = makeSchema();
