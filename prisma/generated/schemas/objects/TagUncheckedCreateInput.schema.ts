import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as StudyItemTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './StudyItemTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  color: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  itemTags: z.lazy(() => StudyItemTagUncheckedCreateNestedManyWithoutTagInputObjectSchema)
}).strict();
export const TagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateInput>;
export const TagUncheckedCreateInputObjectZodSchema = makeSchema();
