import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudyItemOrderByWithRelationInputObjectSchema as StudyItemOrderByWithRelationInputObjectSchema } from './StudyItemOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  studyItemId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  studyItem: z.lazy(() => StudyItemOrderByWithRelationInputObjectSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StudyItemTagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudyItemTagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagOrderByWithRelationInput>;
export const StudyItemTagOrderByWithRelationInputObjectZodSchema = makeSchema();
