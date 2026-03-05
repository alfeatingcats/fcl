import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { StatusSchema } from '../enums/Status.schema';
import { UserCreateNestedOneWithoutStudyItemInputObjectSchema as UserCreateNestedOneWithoutStudyItemInputObjectSchema } from './UserCreateNestedOneWithoutStudyItemInput.schema';
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
  completedAt: z.coerce.date().optional().nullable(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutStudyItemInputObjectSchema),
  repetitions: z.lazy(() => StudyRepetitionCreateNestedManyWithoutStudyItemInputObjectSchema),
  itemTags: z.lazy(() => StudyItemTagCreateNestedManyWithoutStudyItemInputObjectSchema)
}).strict();
export const StudyItemCreateInputObjectSchema: z.ZodType<Prisma.StudyItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateInput>;
export const StudyItemCreateInputObjectZodSchema = makeSchema();
