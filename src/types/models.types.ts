import type { User } from "@prisma/client";

export type BasicUserInfo = Pick<User, "name" | "email" | "image">;

export type StrictBasicUserInfo = {
  [K in keyof BasicUserInfo]: NonNullable<BasicUserInfo[K]>;
};
