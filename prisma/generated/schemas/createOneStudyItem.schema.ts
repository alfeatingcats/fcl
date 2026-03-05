import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemIncludeObjectSchema as StudyItemIncludeObjectSchema } from './objects/StudyItemInclude.schema';
import { StudyItemCreateInputObjectSchema as StudyItemCreateInputObjectSchema } from './objects/StudyItemCreateInput.schema';
import { StudyItemUncheckedCreateInputObjectSchema as StudyItemUncheckedCreateInputObjectSchema } from './objects/StudyItemUncheckedCreateInput.schema';

export const StudyItemCreateOneSchema: z.ZodType<Prisma.StudyItemCreateArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), data: z.union([StudyItemCreateInputObjectSchema, StudyItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudyItemCreateArgs>;

export const StudyItemCreateOneZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), include: StudyItemIncludeObjectSchema.optional(), data: z.union([StudyItemCreateInputObjectSchema, StudyItemUncheckedCreateInputObjectSchema]) }).strict();