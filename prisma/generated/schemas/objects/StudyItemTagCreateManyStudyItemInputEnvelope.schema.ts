import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateManyStudyItemInputObjectSchema as StudyItemTagCreateManyStudyItemInputObjectSchema } from './StudyItemTagCreateManyStudyItemInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudyItemTagCreateManyStudyItemInputObjectSchema), z.lazy(() => StudyItemTagCreateManyStudyItemInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudyItemTagCreateManyStudyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.StudyItemTagCreateManyStudyItemInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyStudyItemInputEnvelope>;
export const StudyItemTagCreateManyStudyItemInputEnvelopeObjectZodSchema = makeSchema();
