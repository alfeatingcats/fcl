import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagScalarWhereInputObjectSchema as StudyItemTagScalarWhereInputObjectSchema } from './StudyItemTagScalarWhereInput.schema';
import { StudyItemTagUpdateManyMutationInputObjectSchema as StudyItemTagUpdateManyMutationInputObjectSchema } from './StudyItemTagUpdateManyMutationInput.schema';
import { StudyItemTagUncheckedUpdateManyWithoutStudyItemInputObjectSchema as StudyItemTagUncheckedUpdateManyWithoutStudyItemInputObjectSchema } from './StudyItemTagUncheckedUpdateManyWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemTagUpdateManyMutationInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateManyWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateManyWithWhereWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateManyWithWhereWithoutStudyItemInput>;
export const StudyItemTagUpdateManyWithWhereWithoutStudyItemInputObjectZodSchema = makeSchema();
