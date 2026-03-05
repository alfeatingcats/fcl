import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithoutStudyItemInputObjectSchema as StudyItemTagUpdateWithoutStudyItemInputObjectSchema } from './StudyItemTagUpdateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedUpdateWithoutStudyItemInput.schema';
import { StudyItemTagCreateWithoutStudyItemInputObjectSchema as StudyItemTagCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagCreateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedCreateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudyItemTagUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema)]),
  create: z.union([z.lazy(() => StudyItemTagCreateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedCreateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInput>;
export const StudyItemTagUpsertWithWhereUniqueWithoutStudyItemInputObjectZodSchema = makeSchema();
