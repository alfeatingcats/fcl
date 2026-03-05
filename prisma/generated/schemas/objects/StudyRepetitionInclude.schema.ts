import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemArgsObjectSchema as StudyItemArgsObjectSchema } from './StudyItemArgs.schema'

const makeSchema = () => z.object({
  studyItem: z.union([z.boolean(), z.lazy(() => StudyItemArgsObjectSchema)]).optional()
}).strict();
export const StudyRepetitionIncludeObjectSchema: z.ZodType<Prisma.StudyRepetitionInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionInclude>;
export const StudyRepetitionIncludeObjectZodSchema = makeSchema();
