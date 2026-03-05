import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateManyTagInputObjectSchema as StudyItemTagCreateManyTagInputObjectSchema } from './StudyItemTagCreateManyTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudyItemTagCreateManyTagInputObjectSchema), z.lazy(() => StudyItemTagCreateManyTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudyItemTagCreateManyTagInputEnvelopeObjectSchema: z.ZodType<Prisma.StudyItemTagCreateManyTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateManyTagInputEnvelope>;
export const StudyItemTagCreateManyTagInputEnvelopeObjectZodSchema = makeSchema();
