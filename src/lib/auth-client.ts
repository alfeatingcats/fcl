import { createAuthClient } from 'better-auth/react'

import type { auth } from '@/server/auth'

export const authClient = createAuthClient<{
  $InferAuth: typeof auth extends { options: infer O } ? O : never
}>()

export const { signIn, signOut, useSession } = authClient
