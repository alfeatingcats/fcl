import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema';
import { EnumRepetitionStatusFieldUpdateOperationsInputObjectSchema as EnumRepetitionStatusFieldUpdateOperationsInputObjectSchema } from './EnumRepetitionStatusFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StudyItemUpdateOneRequiredWithoutRepetitionsNestedInputObjectSchema as StudyItemUpdateOneRequiredWithoutRepetitionsNestedInputObjectSchema } from './StudyItemUpdateOneRequiredWithoutRepetitionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  repetitionNumber: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  scheduledAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  completedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([RepetitionStatusSchema, z.lazy(() => EnumRepetitionStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  difficulty: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  studyItem: z.lazy(() => StudyItemUpdateOneRequiredWithoutRepetitionsNestedInputObjectSchema).optional()
}).strict();
export const StudyRepetitionUpdateInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateInput>;
export const StudyRepetitionUpdateInputObjectZodSchema = makeSchema();
