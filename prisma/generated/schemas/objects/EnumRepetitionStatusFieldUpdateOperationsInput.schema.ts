import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepetitionStatusSchema } from '../enums/RepetitionStatus.schema'

const makeSchema = () => z.object({
  set: RepetitionStatusSchema.optional()
}).strict();
export const EnumRepetitionStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRepetitionStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRepetitionStatusFieldUpdateOperationsInput>;
export const EnumRepetitionStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
