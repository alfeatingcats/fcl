import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutStudyItemInputObjectSchema as UserUpdateWithoutStudyItemInputObjectSchema } from './UserUpdateWithoutStudyItemInput.schema';
import { UserUncheckedUpdateWithoutStudyItemInputObjectSchema as UserUncheckedUpdateWithoutStudyItemInputObjectSchema } from './UserUncheckedUpdateWithoutStudyItemInput.schema';
import { UserCreateWithoutStudyItemInputObjectSchema as UserCreateWithoutStudyItemInputObjectSchema } from './UserCreateWithoutStudyItemInput.schema';
import { UserUncheckedCreateWithoutStudyItemInputObjectSchema as UserUncheckedCreateWithoutStudyItemInputObjectSchema } from './UserUncheckedCreateWithoutStudyItemInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStudyItemInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStudyItemInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutStudyItemInput>;
export const UserUpsertWithoutStudyItemInputObjectZodSchema = makeSchema();
