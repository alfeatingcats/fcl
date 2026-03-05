import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StudyItemTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema as StudyItemTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './StudyItemTagUncheckedUpdateManyWithoutTagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  itemTags: z.lazy(() => StudyItemTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional()
}).strict();
export const TagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateInput>;
export const TagUncheckedUpdateInputObjectZodSchema = makeSchema();
