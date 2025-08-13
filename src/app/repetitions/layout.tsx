import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Repetitions",
  description: "Focu Repetitions page",
};

const RepetitionsLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default RepetitionsLayout;
