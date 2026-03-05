import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRepetitionStatusFilterObjectSchema as NestedEnumRepetitionStatusFilterObjectSchema } from './NestedEnumRepetitionStatusFilter.schema'

const nestedenumrepetitionstatuswithaggregatesfilterSchema = z.object({
  equals: RepetitionStatusSchema.optional(),
  in: RepetitionStatusSchema.array().optional(),
  notIn: RepetitionStatusSchema.array().optional(),
  not: z.union([RepetitionStatusSchema, z.lazy(() => NestedEnumRepetitionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumRepetitionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRepetitionStatusWithAggregatesFilter> = nestedenumrepetitionstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRepetitionStatusWithAggregatesFilter>;
export const NestedEnumRepetitionStatusWithAggregatesFilterObjectZodSchema = nestedenumrepetitionstatuswithaggregatesfilterSchema;
