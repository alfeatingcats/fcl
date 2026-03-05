import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUncheckedUpdateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUncheckedUpdateWithoutStudyItemInput>;
export const StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectZodSchema = makeSchema();
