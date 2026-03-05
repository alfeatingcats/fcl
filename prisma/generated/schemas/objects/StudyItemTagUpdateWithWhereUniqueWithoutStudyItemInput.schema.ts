import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagWhereUniqueInputObjectSchema as StudyItemTagWhereUniqueInputObjectSchema } from './StudyItemTagWhereUniqueInput.schema';
import { StudyItemTagUpdateWithoutStudyItemInputObjectSchema as StudyItemTagUpdateWithoutStudyItemInputObjectSchema } from './StudyItemTagUpdateWithoutStudyItemInput.schema';
import { StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedUpdateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemTagUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInput>;
export const StudyItemTagUpdateWithWhereUniqueWithoutStudyItemInputObjectZodSchema = makeSchema();
