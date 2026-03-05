import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema as StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema } from './StudyItemUpdateOneRequiredWithoutItemTagsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  studyItem: z.lazy(() => StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema).optional()
}).strict();
export const StudyItemTagUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateWithoutTagInput>;
export const StudyItemTagUpdateWithoutTagInputObjectZodSchema = makeSchema();
