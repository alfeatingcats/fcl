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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StudyRepetitionCreateManyInputObjectSchema: z.ZodType<Prisma.StudyRepetitionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionCreateManyInput>;
export const StudyRepetitionCreateManyInputObjectZodSchema = makeSchema();
