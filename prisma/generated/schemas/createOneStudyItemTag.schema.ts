import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemTagSelectObjectSchema as StudyItemTagSelectObjectSchema } from './objects/StudyItemTagSelect.schema';
import { StudyItemTagIncludeObjectSchema as StudyItemTagIncludeObjectSchema } from './objects/StudyItemTagInclude.schema';
import { StudyItemTagCreateInputObjectSchema as StudyItemTagCreateInputObjectSchema } from './objects/StudyItemTagCreateInput.schema';
import { StudyItemTagUncheckedCreateInputObjectSchema as StudyItemTagUncheckedCreateInputObjectSchema } from './objects/StudyItemTagUncheckedCreateInput.schema';

export const StudyItemTagCreateOneSchema: z.ZodType<Prisma.StudyItemTagCreateArgs> = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), data: z.union([StudyItemTagCreateInputObjectSchema, StudyItemTagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudyItemTagCreateArgs>;

export const StudyItemTagCreateOneZodSchema = z.object({ select: StudyItemTagSelectObjectSchema.optional(), include: StudyItemTagIncludeObjectSchema.optional(), data: z.union([StudyItemTagCreateInputObjectSchema, StudyItemTagUncheckedCreateInputObjectSchema]) }).strict();