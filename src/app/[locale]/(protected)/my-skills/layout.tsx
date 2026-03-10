import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "My skills",
  description: "Focu | My skills page",
};

const MySkillsLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default MySkillsLayout;
