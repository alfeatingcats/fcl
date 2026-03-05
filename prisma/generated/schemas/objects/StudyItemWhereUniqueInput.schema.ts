import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const StudyItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudyItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemWhereUniqueInput>;
export const StudyItemWhereUniqueInputObjectZodSchema = makeSchema();
