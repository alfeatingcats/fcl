import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagCreateNestedManyWithoutTagInputObjectSchema as StudyItemTagCreateNestedManyWithoutTagInputObjectSchema } from './StudyItemTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  color: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  itemTags: z.lazy(() => StudyItemTagCreateNestedManyWithoutTagInputObjectSchema)
}).strict();
export const TagCreateInputObjectSchema: z.ZodType<Prisma.TagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateInput>;
export const TagCreateInputObjectZodSchema = makeSchema();
