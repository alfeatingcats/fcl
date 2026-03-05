import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStudyItemInputObjectSchema as UserCreateWithoutStudyItemInputObjectSchema } from './UserCreateWithoutStudyItemInput.schema';
import { UserUncheckedCreateWithoutStudyItemInputObjectSchema as UserUncheckedCreateWithoutStudyItemInputObjectSchema } from './UserUncheckedCreateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStudyItemInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutStudyItemInput>;
export const UserCreateOrConnectWithoutStudyItemInputObjectZodSchema = makeSchema();
