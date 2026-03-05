import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema as StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema } from './StudyItemCreateNestedOneWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  studyItem: z.lazy(() => StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema)
}).strict();
export const StudyItemTagCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateWithoutTagInput>;
export const StudyItemTagCreateWithoutTagInputObjectZodSchema = makeSchema();
