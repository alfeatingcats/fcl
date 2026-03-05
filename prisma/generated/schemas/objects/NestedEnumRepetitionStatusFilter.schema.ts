import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema'

const nestedenumrepetitionstatusfilterSchema = z.object({
  equals: RepetitionStatusSchema.optional(),
  in: RepetitionStatusSchema.array().optional(),
  notIn: RepetitionStatusSchema.array().optional(),
  not: z.union([RepetitionStatusSchema, z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRepetitionStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumRepetitionStatusFilter> = nestedenumrepetitionstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRepetitionStatusFilter>;
export const NestedEnumRepetitionStatusFilterObjectZodSchema = nestedenumrepetitionstatusfilterSchema;
