import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  repetitions: z.boolean().optional(),
  itemTags: z.boolean().optional()
}).strict();
export const StudyItemCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StudyItemCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCountOutputTypeSelect>;
export const StudyItemCountOutputTypeSelectObjectZodSchema = makeSchema();
