import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutStudyItemInputObjectSchema as UserUpdateWithoutStudyItemInputObjectSchema } from './UserUpdateWithoutStudyItemInput.schema';
import { UserUncheckedUpdateWithoutStudyItemInputObjectSchema as UserUncheckedUpdateWithoutStudyItemInputObjectSchema } from './UserUncheckedUpdateWithoutStudyItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutStudyItemInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStudyItemInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutStudyItemInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStudyItemInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStudyItemInput>;
export const UserUpdateToOneWithWhereWithoutStudyItemInputObjectZodSchema = makeSchema();
