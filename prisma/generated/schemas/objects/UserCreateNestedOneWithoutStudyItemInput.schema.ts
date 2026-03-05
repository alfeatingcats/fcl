import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutStudyItemInputObjectSchema as UserCreateWithoutStudyItemInputObjectSchema } from './UserCreateWithoutStudyItemInput.schema';
import { UserUncheckedCreateWithoutStudyItemInputObjectSchema as UserUncheckedCreateWithoutStudyItemInputObjectSchema } from './UserUncheckedCreateWithoutStudyItemInput.schema';
import { UserCreateOrConnectWithoutStudyItemInputObjectSchema as UserCreateOrConnectWithoutStudyItemInputObjectSchema } from './UserCreateOrConnectWithoutStudyItemInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStudyItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudyItemInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutStudyItemInput>;
export const UserCreateNestedOneWithoutStudyItemInputObjectZodSchema = makeSchema();
