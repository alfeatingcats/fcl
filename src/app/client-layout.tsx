"use client";

import type { CFC } from "@/shared/types";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/providers/theme-provider";

export const ClientLayout: CFC = ({ children }) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TRPCReactProvider>
  );
};
