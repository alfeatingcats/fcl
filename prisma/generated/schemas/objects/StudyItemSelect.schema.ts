import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { StudyRepetitionFindManySchema as StudyRepetitionFindManySchema } from '../findManyStudyRepetition.schema';
import { StudyItemTagFindManySchema as StudyItemTagFindManySchema } from '../findManyStudyItemTag.schema';
import { StudyItemCountOutputTypeArgsObjectSchema as StudyItemCountOutputTypeArgsObjectSchema } from './StudyItemCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  descriptionText: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdById: z.boolean().optional(),
  repetitions: z.union([z.boolean(), z.lazy(() => StudyRepetitionFindManySchema)]).optional(),
  itemTags: z.union([z.boolean(), z.lazy(() => StudyItemTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudyItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudyItemSelectObjectSchema: z.ZodType<Prisma.StudyItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemSelect>;
export const StudyItemSelectObjectZodSchema = makeSchema();
