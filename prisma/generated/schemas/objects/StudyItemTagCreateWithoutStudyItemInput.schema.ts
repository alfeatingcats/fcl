import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateNestedOneWithoutItemTagsInputObjectSchema as TagCreateNestedOneWithoutItemTagsInputObjectSchema } from './TagCreateNestedOneWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutItemTagsInputObjectSchema)
}).strict();
export const StudyItemTagCreateWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateWithoutStudyItemInput>;
export const StudyItemTagCreateWithoutStudyItemInputObjectZodSchema = makeSchema();
