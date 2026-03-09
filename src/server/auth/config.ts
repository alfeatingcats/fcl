import { PrismaAdapter } from '@auth/prisma-adapter'
import { type DefaultSession, type NextAuthConfig } from 'next-auth'

import { db } from '@/server/db'

import { authConfig as baseConfig } from './auth.config'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession['user']
  }

  // interface User {
  // }
}

export const authConfig = {
  ...baseConfig,
  adapter: PrismaAdapter(db),
} satisfies NextAuthConfig
