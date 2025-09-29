import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Review Cycle",
  description: "Manage your review cycles effectively",
};

const ReviewCycleLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default ReviewCycleLayout;
