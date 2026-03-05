import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema as StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema } from './StudyItemCreateNestedOneWithoutItemTagsInput.schema';
import { TagCreateNestedOneWithoutItemTagsInputObjectSchema as TagCreateNestedOneWithoutItemTagsInputObjectSchema } from './TagCreateNestedOneWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  studyItem: z.lazy(() => StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutItemTagsInputObjectSchema)
}).strict();
export const StudyItemTagCreateInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateInput>;
export const StudyItemTagCreateInputObjectZodSchema = makeSchema();
