import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateManyCreatedByInputObjectSchema as StudyItemCreateManyCreatedByInputObjectSchema } from './StudyItemCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudyItemCreateManyCreatedByInputObjectSchema), z.lazy(() => StudyItemCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudyItemCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.StudyItemCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateManyCreatedByInputEnvelope>;
export const StudyItemCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
