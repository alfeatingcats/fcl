import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagFindManySchema as StudyItemTagFindManySchema } from '../findManyStudyItemTag.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  itemTags: z.union([z.boolean(), z.lazy(() => StudyItemTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagSelectObjectSchema: z.ZodType<Prisma.TagSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagSelect>;
export const TagSelectObjectZodSchema = makeSchema();
