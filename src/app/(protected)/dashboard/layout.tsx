import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Focu Dashboard page",
};

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default DashboardLayout;
