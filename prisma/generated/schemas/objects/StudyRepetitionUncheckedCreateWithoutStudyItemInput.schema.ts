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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUncheckedCreateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUncheckedCreateWithoutStudyItemInput>;
export const StudyRepetitionUncheckedCreateWithoutStudyItemInputObjectZodSchema = makeSchema();
