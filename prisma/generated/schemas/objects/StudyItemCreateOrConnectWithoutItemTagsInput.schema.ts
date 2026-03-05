import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemCreateWithoutItemTagsInputObjectSchema as StudyItemCreateWithoutItemTagsInputObjectSchema } from './StudyItemCreateWithoutItemTagsInput.schema';
import { StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema as StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedCreateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudyItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudyItemCreateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema)])
}).strict();
export const StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.StudyItemCreateOrConnectWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateOrConnectWithoutItemTagsInput>;
export const StudyItemCreateOrConnectWithoutItemTagsInputObjectZodSchema = makeSchema();
