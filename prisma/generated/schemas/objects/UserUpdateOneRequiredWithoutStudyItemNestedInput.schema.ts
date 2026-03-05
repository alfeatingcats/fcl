import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutStudyItemInputObjectSchema as UserCreateWithoutStudyItemInputObjectSchema } from './UserCreateWithoutStudyItemInput.schema';
import { UserUncheckedCreateWithoutStudyItemInputObjectSchema as UserUncheckedCreateWithoutStudyItemInputObjectSchema } from './UserUncheckedCreateWithoutStudyItemInput.schema';
import { UserCreateOrConnectWithoutStudyItemInputObjectSchema as UserCreateOrConnectWithoutStudyItemInputObjectSchema } from './UserCreateOrConnectWithoutStudyItemInput.schema';
import { UserUpsertWithoutStudyItemInputObjectSchema as UserUpsertWithoutStudyItemInputObjectSchema } from './UserUpsertWithoutStudyItemInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutStudyItemInputObjectSchema as UserUpdateToOneWithWhereWithoutStudyItemInputObjectSchema } from './UserUpdateToOneWithWhereWithoutStudyItemInput.schema';
import { UserUpdateWithoutStudyItemInputObjectSchema as UserUpdateWithoutStudyItemInputObjectSchema } from './UserUpdateWithoutStudyItemInput.schema';
import { UserUncheckedUpdateWithoutStudyItemInputObjectSchema as UserUncheckedUpdateWithoutStudyItemInputObjectSchema } from './UserUncheckedUpdateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStudyItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudyItemInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStudyItemInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutStudyItemInputObjectSchema), z.lazy(() => UserUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStudyItemInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutStudyItemNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStudyItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutStudyItemNestedInput>;
export const UserUpdateOneRequiredWithoutStudyItemNestedInputObjectZodSchema = makeSchema();
