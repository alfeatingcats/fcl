import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { StudyItemCreateNestedOneWithoutRepetitionsInputObjectSchema as StudyItemCreateNestedOneWithoutRepetitionsInputObjectSchema } from './StudyItemCreateNestedOneWithoutRepetitionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  repetitionNumber: z.number().int(),
  scheduledAt: z.coerce.date(),
  completedAt: z.coerce.date().optional().nullable(),
  status: RepetitionStatusSchema.optional(),
  difficulty: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  studyItem: z.lazy(() => StudyItemCreateNestedOneWithoutRepetitionsInputObjectSchema)
}).strict();
export const StudyRepetitionCreateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionCreateInput>;
export const StudyRepetitionCreateInputObjectZodSchema = makeSchema();
