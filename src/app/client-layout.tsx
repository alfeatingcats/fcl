"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/providers/theme-provider";
import type { CFC } from "@/types";

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
