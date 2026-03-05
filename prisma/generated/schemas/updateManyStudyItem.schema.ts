import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudyItemUpdateManyMutationInputObjectSchema as StudyItemUpdateManyMutationInputObjectSchema } from './objects/StudyItemUpdateManyMutationInput.schema';
import { StudyItemWhereInputObjectSchema as StudyItemWhereInputObjectSchema } from './objects/StudyItemWhereInput.schema';

export const StudyItemUpdateManySchema: z.ZodType<Prisma.StudyItemUpdateManyArgs> = z.object({ data: StudyItemUpdateManyMutationInputObjectSchema, where: StudyItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudyItemUpdateManyArgs>;

export const StudyItemUpdateManyZodSchema = z.object({ data: StudyItemUpdateManyMutationInputObjectSchema, where: StudyItemWhereInputObjectSchema.optional() }).strict();