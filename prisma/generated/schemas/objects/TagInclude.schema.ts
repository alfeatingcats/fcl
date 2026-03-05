import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagFindManySchema as StudyItemTagFindManySchema } from '../findManyStudyItemTag.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  itemTags: z.union([z.boolean(), z.lazy(() => StudyItemTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagIncludeObjectSchema: z.ZodType<Prisma.TagInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagInclude>;
export const TagIncludeObjectZodSchema = makeSchema();
