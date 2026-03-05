import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema as TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutItemTagsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema).optional()
}).strict();
export const StudyItemTagUpdateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateWithoutStudyItemInput>;
export const StudyItemTagUpdateWithoutStudyItemInputObjectZodSchema = makeSchema();
