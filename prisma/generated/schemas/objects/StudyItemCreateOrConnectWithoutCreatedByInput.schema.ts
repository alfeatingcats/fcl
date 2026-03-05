import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemCreateWithoutCreatedByInputObjectSchema as StudyItemCreateWithoutCreatedByInputObjectSchema } from './StudyItemCreateWithoutCreatedByInput.schema';
import { StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema as StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema } from './StudyItemUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyItemCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StudyItemCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StudyItemCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateOrConnectWithoutCreatedByInput>;
export const StudyItemCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
