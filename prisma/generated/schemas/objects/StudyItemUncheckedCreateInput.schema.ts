import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { StatusSchema } from '../enums/Status.schema';
import { StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  descriptionText: z.string().optional().nullable(),
  status: StatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  completedAt: z.coerce.date().optional().nullable(),
  createdById: z.string(),
  repetitions: z.lazy(() => StudyRepetitionUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema),
  itemTags: z.lazy(() => StudyItemTagUncheckedCreateNestedManyWithoutStudyItemInputObjectSchema)
}).strict();
export const StudyItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StudyItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUncheckedCreateInput>;
export const StudyItemUncheckedCreateInputObjectZodSchema = makeSchema();
