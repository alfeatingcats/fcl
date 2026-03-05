import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyRepetitionScalarWhereInputObjectSchema as StudyRepetitionScalarWhereInputObjectSchema } from './StudyRepetitionScalarWhereInput.schema';
import { StudyRepetitionUpdateManyMutationInputObjectSchema as StudyRepetitionUpdateManyMutationInputObjectSchema } from './StudyRepetitionUpdateManyMutationInput.schema';
import { StudyRepetitionUncheckedUpdateManyWithoutStudyItemInputObjectSchema as StudyRepetitionUncheckedUpdateManyWithoutStudyItemInputObjectSchema } from './StudyRepetitionUncheckedUpdateManyWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyRepetitionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudyRepetitionUpdateManyMutationInputObjectSchema), z.lazy(() => StudyRepetitionUncheckedUpdateManyWithoutStudyItemInputObjectSchema)])
}).strict();
export const StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.StudyRepetitionUpdateManyWithWhereWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyRepetitionUpdateManyWithWhereWithoutStudyItemInput>;
export const StudyRepetitionUpdateManyWithWhereWithoutStudyItemInputObjectZodSchema = makeSchema();
