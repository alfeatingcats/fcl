import { cookies } from "next/headers";
import type { PropsWithChildren } from "react";

import { SIDEBAR_COOKIE_NAME } from "@/lib/const";

import { ClientLayout } from "./client-layout";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const sidebarValue = JSON.parse(sidebarState?.value ?? "true") as boolean;

  return <ClientLayout sidebarValue={sidebarValue}>{children}</ClientLayout>;
};

export default RootLayout;
