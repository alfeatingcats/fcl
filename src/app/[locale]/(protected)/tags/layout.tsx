import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Study Items tags",
  description:
    "Manage your study items tags: create, edit, and organize them to enhance your learning experience.",
};

const StudyItemsTagsLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default StudyItemsTagsLayout;
