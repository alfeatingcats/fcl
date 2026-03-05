import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional()
}).strict();
export const TagWhereUniqueInputObjectSchema: z.ZodType<Prisma.TagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagWhereUniqueInput>;
export const TagWhereUniqueInputObjectZodSchema = makeSchema();
