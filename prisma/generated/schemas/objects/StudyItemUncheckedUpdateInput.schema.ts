import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatusSchema } from '../enums/Status.schema';
import { EnumStatusFieldUpdateOperationsInputObjectSchema as EnumStatusFieldUpdateOperationsInputObjectSchema } from './EnumStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema as StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema } from './StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInput.schema';
import { StudyItemTagUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema as StudyItemTagUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema } from './StudyItemTagUncheckedUpdateManyWithoutStudyItemNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  descriptionText: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([StatusSchema, z.lazy(() => EnumStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  completedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdById: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  repetitions: z.lazy(() => StudyRepetitionUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema).optional(),
  itemTags: z.lazy(() => StudyItemTagUncheckedUpdateManyWithoutStudyItemNestedInputObjectSchema).optional()
}).strict();
export const StudyItemUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StudyItemUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUncheckedUpdateInput>;
export const StudyItemUncheckedUpdateInputObjectZodSchema = makeSchema();
