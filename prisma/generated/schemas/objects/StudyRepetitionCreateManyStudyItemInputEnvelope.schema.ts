import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionCreateManyStudyItemInputObjectSchema as StudyRepetitionCreateManyStudyItemInputObjectSchema } from './StudyRepetitionCreateManyStudyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudyRepetitionCreateManyStudyItemInputObjectSchema), z.lazy(() => StudyRepetitionCreateManyStudyItemInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudyRepetitionCreateManyStudyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.StudyRepetitionCreateManyStudyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionCreateManyStudyItemInputEnvelope>;
export const StudyRepetitionCreateManyStudyItemInputEnvelopeObjectZodSchema = makeSchema();
