'use client'

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import type { StrictBasicUserInfo } from '@/shared/api/schemas'
import type { CFC } from '@/shared/types'

import { Header } from '@/widgets/header'

type ClientLayoutProps = {
  user: StrictBasicUserInfo
  sidebarValue: boolean
}

export const ClientLayout: CFC<ClientLayoutProps> = ({
  user,
  children,
  sidebarValue,
}) => {
  return (
    <div className="flex h-screen w-screen max-w-screen! overflow-hidden">
      <SidebarProvider
        defaultOpen={sidebarValue}
        style={
          {
            '--sidebar-width': '18rem',
          } as React.CSSProperties
        }
      >
        <AppSidebar user={user} />

        <SidebarInset className="min-h-0 w-full min-w-0 flex-1">
          <OverlayScrollbarsComponent
            element="div"
            options={{
              scrollbars: { autoHide: 'scroll' },
              overflow: { x: 'hidden', y: 'scroll' },
            }}
            defer
          >
            <div className="min-h-full w-full px-10 pb-8 pt-2">
              <Header />
              {children}
            </div>
          </OverlayScrollbarsComponent>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
