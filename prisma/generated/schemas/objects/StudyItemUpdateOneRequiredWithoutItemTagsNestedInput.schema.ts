import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudyItemCreateWithoutItemTagsInputObjectSchema as StudyItemCreateWithoutItemTagsInputObjectSchema } from './StudyItemCreateWithoutItemTagsInput.schema';
import { StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema as StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedCreateWithoutItemTagsInput.schema';
import { StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema as StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema } from './StudyItemCreateOrConnectWithoutItemTagsInput.schema';
import { StudyItemUpsertWithoutItemTagsInputObjectSchema as StudyItemUpsertWithoutItemTagsInputObjectSchema } from './StudyItemUpsertWithoutItemTagsInput.schema';
import { StudyItemWhereUniqueInputObjectSchema as StudyItemWhereUniqueInputObjectSchema } from './StudyItemWhereUniqueInput.schema';
import { StudyItemUpdateToOneWithWhereWithoutItemTagsInputObjectSchema as StudyItemUpdateToOneWithWhereWithoutItemTagsInputObjectSchema } from './StudyItemUpdateToOneWithWhereWithoutItemTagsInput.schema';
import { StudyItemUpdateWithoutItemTagsInputObjectSchema as StudyItemUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUpdateWithoutItemTagsInput.schema';
import { StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema as StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema } from './StudyItemUncheckedUpdateWithoutItemTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudyItemCreateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedCreateWithoutItemTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudyItemCreateOrConnectWithoutItemTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => StudyItemUpsertWithoutItemTagsInputObjectSchema).optional(),
  connect: z.lazy(() => StudyItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StudyItemUpdateToOneWithWhereWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUpdateWithoutItemTagsInputObjectSchema), z.lazy(() => StudyItemUncheckedUpdateWithoutItemTagsInputObjectSchema)]).optional()
}).strict();
export const StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectSchema: z.ZodType<Prisma.StudyItemUpdateOneRequiredWithoutItemTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudyItemUpdateOneRequiredWithoutItemTagsNestedInput>;
export const StudyItemUpdateOneRequiredWithoutItemTagsNestedInputObjectZodSchema = makeSchema();
