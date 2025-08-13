import { type Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Focu Sign In page",
};

const SignInLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default SignInLayout;
