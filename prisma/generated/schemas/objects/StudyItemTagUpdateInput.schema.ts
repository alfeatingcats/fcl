import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema as StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema } from './StudyItemUpdateOneRequiredWithoutItemTagsNestedInput.schema';
import { TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema as TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutItemTagsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  studyItem: z.lazy(() => StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema).optional()
}).strict();
export const StudyItemTagUpdateInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateInput>;
export const StudyItemTagUpdateInputObjectZodSchema = makeSchema();
