import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  itemTags: z.boolean().optional()
}).strict();
export const TagCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCountOutputTypeSelect>;
export const TagCountOutputTypeSelectObjectZodSchema = makeSchema();
