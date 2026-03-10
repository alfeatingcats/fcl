'use client'

import { ThemeProvider } from '@/providers/theme-provider'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { CFC } from '@/shared/types'

import { TRPCReactProvider } from '@/trpc/react'

export const ClientLayout: CFC = ({ children }) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
      <Toaster position="bottom-center" />
    </TRPCReactProvider>
  )
}
