import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagCreateWithoutTagInputObjectSchema as StudyItemTagCreateWithoutTagInputObjectSchema } from './StudyItemTagCreateWithoutTagInput.schema';
import { StudyItemTagUncheckedCreateWithoutTagInputObjectSchema as StudyItemTagUncheckedCreateWithoutTagInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutTagInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const StudyItemTagCreateOrConnectWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateOrConnectWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateOrConnectWithoutTagInput>;
export const StudyItemTagCreateOrConnectWithoutTagInputObjectZodSchema = makeSchema();
