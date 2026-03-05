import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { StudyRepetitionOrderByRelationAggregateInputObjectSchema as StudyRepetitionOrderByRelationAggregateInputObjectSchema } from './StudyRepetitionOrderByRelationAggregateInput.schema';
import { StudyItemTagOrderByRelationAggregateInputObjectSchema as StudyItemTagOrderByRelationAggregateInputObjectSchema } from './StudyItemTagOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  descriptionText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: SortOrderSchema.optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  repetitions: z.lazy(() => StudyRepetitionOrderByRelationAggregateInputObjectSchema).optional(),
  itemTags: z.lazy(() => StudyItemTagOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StudyItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudyItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemOrderByWithRelationInput>;
export const StudyItemOrderByWithRelationInputObjectZodSchema = makeSchema();
