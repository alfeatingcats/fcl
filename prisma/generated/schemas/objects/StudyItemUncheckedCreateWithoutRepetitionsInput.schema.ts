import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { StatusSchema } from '../enums/Status.schema';
import { StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  descriptionText: z.string().optional().nullable(),
  status: StatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completedAt: z.coerce.date().optional().nullable(),
  createdById: z.string(),
  itemTags: z.lazy(() => StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema).optional()
}).strict();
export const StudyItemUncheckedCreateWithoutRepetitionsInputObjectSchema: z.ZodType<Prisma.StudyItemUncheckedCreateWithoutRepetitionsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUncheckedCreateWithoutRepetitionsInput>;
export const StudyItemUncheckedCreateWithoutRepetitionsInputObjectZodSchema = makeSchema();
