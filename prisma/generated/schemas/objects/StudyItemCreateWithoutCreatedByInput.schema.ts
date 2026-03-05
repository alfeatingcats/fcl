import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { StatusSchema } from '../enums/Status.schema';
import { StudyRepetitionCreateNestedManyWithoutStudyItemInputObjectSchema as StudyRepetitionCreateNestedManyWithoutStudyItemInputObjectSchema } from './StudyRepetitionCreateNestedManyWithoutStudyItemInput.schema';
import { StudyItemTagCreateNestedManyWithoutStudyItemInputObjectSchema as StudyItemTagCreateNestedManyWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateNestedManyWithoutStudyItemInput.schema'

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
  repetitions: z.lazy(() => StudyRepetitionCreateNestedManyWithoutStudyItemInputObjectSchema).optional(),
  itemTags: z.lazy(() => StudyItemTagCreateNestedManyWithoutStudyItemInputObjectSchema).optional()
}).strict();
export const StudyItemCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateWithoutCreatedByInput>;
export const StudyItemCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
