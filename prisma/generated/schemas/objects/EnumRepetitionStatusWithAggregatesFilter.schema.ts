import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { NestedEnumRepetitionStatusWithAggregatesFilterObjectSchema as NestedEnumRepetitionStatusWithAggregatesFilterObjectSchema } from './NestedEnumRepetitionStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRepetitionStatusFilterObjectSchema as NestedEnumRepetitionStatusFilterObjectSchema } from './NestedEnumRepetitionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RepetitionStatusSchema.optional(),
  in: RepetitionStatusSchema.array().optional(),
  notIn: RepetitionStatusSchema.array().optional(),
  not: z.union([RepetitionStatusSchema, z.lazy(() => NestedEnumRepetitionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema).optional()
}).strict();
export const EnumRepetitionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRepetitionStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRepetitionStatusWithAggregatesFilter>;
export const EnumRepetitionStatusWithAggregatesFilterObjectZodSchema = makeSchema();
