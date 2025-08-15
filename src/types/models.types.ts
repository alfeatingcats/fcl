import type { User } from "@prisma/client";
import { type SetNonNullable } from "type-fest";

export type BasicUserInfo = Pick<User, "name" | "email" | "image">;

export type StrictBasicUserInfo = SetNonNullable<BasicUserInfo>;
