import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemSelectObjectSchema as StudyItemSelectObjectSchema } from './objects/StudyItemSelect.schema';
import { StudyItemUpdateManyMutationInputObjectSchema as StudyItemUpdateManyMutationInputObjectSchema } from './objects/StudyItemUpdateManyMutationInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';

export const StudyItemUpdateManyAndReturnSchema: z.ZodType<Prisma.StudyItemUpdateManyAndReturnArgs> = z.object({ select: StudyItemSelectObjectSchema.optional(), data: StudyItemUpdateManyMutationInputObjectSchema, where: StudyItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemUpdateManyAndReturnArgs>;

export const StudyItemUpdateManyAndReturnZodSchema = z.object({ select: StudyItemSelectObjectSchema.optional(), data: StudyItemUpdateManyMutationInputObjectSchema, where: StudyItemWhereInputObjectSchema.optional() }).strict();