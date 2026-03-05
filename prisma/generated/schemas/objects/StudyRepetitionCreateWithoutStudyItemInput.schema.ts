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
export const StudyRepetitionCreateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionCreateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionCreateWithoutStudyItemInput>;
export const StudyRepetitionCreateWithoutStudyItemInputObjectZodSchema = makeSchema();
