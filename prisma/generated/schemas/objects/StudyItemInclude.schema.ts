import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { StudyRepetitionFindManySchema as StudyRepetitionFindManySchema } from '../findManyStudyRepetition.schema';
import { StudyItemTagFindManySchema as StudyItemTagFindManySchema } from '../findManyStudyItemTag.schema';
import { StudyItemCountOutputTypeArgsObjectSchema as StudyItemCountOutputTypeArgsObjectSchema } from './StudyItemCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  repetitions: z.union([z.boolean(), z.lazy(() => StudyRepetitionFindManySchema)]).optional(),
  itemTags: z.union([z.boolean(), z.lazy(() => StudyItemTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudyItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudyItemIncludeObjectSchema: z.ZodType<Prisma.StudyItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemInclude>;
export const StudyItemIncludeObjectZodSchema = makeSchema();
