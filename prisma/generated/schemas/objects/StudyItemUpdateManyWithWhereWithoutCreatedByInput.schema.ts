import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemScalarWhereInputObjectSchema as StudyItemScalarWhereInputObjectSchema } from './StudyItemScalarWhereInput.schema';
import { StudyItemUpdateManyMutationInputObjectSchema as StudyItemUpdateManyMutationInputObjectSchema } from './StudyItemUpdateManyMutationInput.schema';
import { StudyItemUncheckedUpdateManyWithoutCreatedByInputObjectSchema as StudyItemUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudyItemUpdateManyMutationInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateManyWithWhereWithoutCreatedByInput>;
export const StudyItemUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
