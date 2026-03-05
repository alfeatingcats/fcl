import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutItemTagsInputObjectSchema as StudyItemCreateWithoutItemTagsInputObjectSchema } from './StudyItemCreateWithoutItemTagsInput.schema';
import { StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema as StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedCreateWithoutItemTagsInput.schema';
import { StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema as StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema } from './StudyItemCreateOrConnectWithoutItemTagsInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema).optional(),
  connect: z.lazy(() => StudyItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const StudyItemCreateNestedOneWithoutItemTagsInputObjectSchema: z.ZodType<Prisma.StudyItemCreateNestedOneWithoutItemTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemCreateNestedOneWithoutItemTagsInput>;
export const StudyItemCreateNestedOneWithoutItemTagsInputObjectZodSchema = makeSchema();
