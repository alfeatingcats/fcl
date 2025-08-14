import { pick } from "es-toolkit";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { auth } from "@/server/auth";
import type { BasicUserInfo, StrictBasicUserInfo } from "@/types/models.types";
import { publicPaths, SIDEBAR_COOKIE_NAME } from "@/lib/const";

import { ClientLayout } from "./client-layout";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const userSession = await auth();
  const cookieStore = await cookies();
  if (!userSession?.user) {
    redirect(publicPaths.signIn);
  }

  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const sidebarValue = JSON.parse(sidebarState?.value ?? "true") as boolean;

  return (
    <ClientLayout
      user={
        pick(userSession.user, [
          "name",
          "email",
          "image",
        ]) as StrictBasicUserInfo
      }
      sidebarValue={sidebarValue}
    >
      {children}
    </ClientLayout>
  );
};

export default RootLayout;
