import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  repetitionNumber: z.number().int(),
  scheduledAt: z.coerce.date(),
  completedAt: z.coerce.date().optional().nullable(),
  status: RepetitionStatusSchema.optional(),
  difficulty: z.number().int().optional().nullable(),
  studyItemId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StudyRepetitionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUncheckedCreateInput>;
export const StudyRepetitionUncheckedCreateInputObjectZodSchema = makeSchema();
