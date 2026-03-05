import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemTagScalarWhereInputObjectSchema as StudyItemTagScalarWhereInputObjectSchema } from './StudyItemTagScalarWhereInput.schema';
import { StudyItemTagUpdateManyMutationInputObjectSchema as StudyItemTagUpdateManyMutationInputObjectSchema } from './StudyItemTagUpdateManyMutationInput.schema';
import { StudyItemTagUncheckedUpdateManyWithoutTagInputObjectSchema as StudyItemTagUncheckedUpdateManyWithoutTagInputObjectSchema } from './StudyItemTagUncheckedUpdateManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemTagUpdateManyMutationInputObjectSchema), z.lazy(() => StudyItemTagUncheckedUpdateManyWithoutTagInputObjectSchema)])
}).strict();
export const StudyItemTagUpdateManyWithWhereWithoutTagInputObjectSchema: z.ZodType<Prisma.StudyItemTagUpdateManyWithWhereWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemTagUpdateManyWithWhereWithoutTagInput>;
export const StudyItemTagUpdateManyWithWhereWithoutTagInputObjectZodSchema = makeSchema();
