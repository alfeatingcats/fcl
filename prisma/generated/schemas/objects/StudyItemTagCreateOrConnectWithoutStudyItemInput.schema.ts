import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagCreateWithoutStudyItemInputObjectSchema as StudyItemTagCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyItemTagCreateOrConnectWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagCreateOrConnectWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagCreateOrConnectWithoutStudyItemInput>;
export const StudyItemTagCreateOrConnectWithoutStudyItemInputObjectZodSchema = makeSchema();
