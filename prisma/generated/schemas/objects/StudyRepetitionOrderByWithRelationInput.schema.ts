import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudyItemOrderByWithRelationInputObjectSchema as StudyItemOrderByWithRelationInputObjectSchema } from './StudyItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  repetitionNumber: SortOrderSchema.optional(),
  scheduledAt: SortOrderSchema.optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  difficulty: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  studyItemId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  studyItem: z.lazy(() => StudyItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StudyRepetitionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudyRepetitionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionOrderByWithRelationInput>;
export const StudyRepetitionOrderByWithRelationInputObjectZodSchema = makeSchema();
