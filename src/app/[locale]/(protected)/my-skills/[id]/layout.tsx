import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "My skill",
  description: "Focu | My skill page",
};

const StudyItemLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default StudyItemLayout;
