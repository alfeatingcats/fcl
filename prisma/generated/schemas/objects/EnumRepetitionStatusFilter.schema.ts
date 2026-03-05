import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { NestedEnumRepetitionStatusFilterObjectSchema as NestedEnumRepetitionStatusFilterObjectSchema } from './NestedEnumRepetitionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RepetitionStatusSchema.optional(),
  in: RepetitionStatusSchema.array().optional(),
  notIn: RepetitionStatusSchema.array().optional(),
  not: z.union([RepetitionStatusSchema, z.lazy(() => NestedEnumRepetitionStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumRepetitionStatusFilterObjectSchema: z.ZodType<Prisma.EnumRepetitionStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRepetitionStatusFilter>;
export const EnumRepetitionStatusFilterObjectZodSchema = makeSchema();
