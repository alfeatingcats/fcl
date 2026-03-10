import { pick } from "es-toolkit";
import { cookies } from "next/headers";
import type { PropsWithChildren } from "react";

import { auth } from "@/server/auth";
import { redirect, type routing } from "@/i18n/routing";
import type { StrictBasicUserInfo } from "@/shared/api/schemas";
import { publicPaths, SIDEBAR_COOKIE_NAME } from "@/shared/lib/const";

import { ClientLayout } from "./client-layout";

type ProtectedRootLayoutProps = {
  params: Promise<{ locale: string }>;
};

const ProtectedRootLayout = async ({
  children,
  params,
}: PropsWithChildren<ProtectedRootLayoutProps>) => {
  const userSession = await auth();

  const { locale } = await params;
  const cookieStore = await cookies();

  if (!userSession?.user) {
    redirect({
      href: publicPaths.signIn,
      locale: locale as unknown as (typeof routing.locales)[number],
    });
  }

  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const sidebarValue = JSON.parse(sidebarState?.value ?? "true") as boolean;

  return (
    <ClientLayout
      user={
        pick(userSession!.user, [
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

export default ProtectedRootLayout;
