import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudyItemTagOrderByRelationAggregateInputObjectSchema as StudyItemTagOrderByRelationAggregateInputObjectSchema } from './StudyItemTagOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  itemTags: z.lazy(() => StudyItemTagOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithRelationInput>;
export const TagOrderByWithRelationInputObjectZodSchema = makeSchema();
