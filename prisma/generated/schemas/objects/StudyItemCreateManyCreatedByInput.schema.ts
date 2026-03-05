import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { StatusSchema } from '../enums/Status.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  descriptionText: z.string().optional().nullable(),
  status: StatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completedAt: z.coerce.date().optional().nullable()
}).strict();
export const StudyItemCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemCreateManyCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateManyCreatedByInput>;
export const StudyItemCreateManyCreatedByInputObjectZodSchema = makeSchema();
