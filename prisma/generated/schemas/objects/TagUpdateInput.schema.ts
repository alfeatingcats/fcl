import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StudyItemTagUpdateManyWithoutTagNestedInputObjectSchema as StudyItemTagUpdateManyWithoutTagNestedInputObjectSchema } from './StudyItemTagUpdateManyWithoutTagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  itemTags: z.lazy(() => StudyItemTagUpdateManyWithoutTagNestedInputObjectSchema).optional()
}).strict();
export const TagUpdateInputObjectSchema: z.ZodType<Prisma.TagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateInput>;
export const TagUpdateInputObjectZodSchema = makeSchema();
