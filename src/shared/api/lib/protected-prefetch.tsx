'use server'

import { getServerSession } from '@/server/auth'
import { api as _api } from '@/trpc/server'

export const protectedApiPrefetch = async (
  serverApi: (api: typeof _api) => Promise<unknown>,
) => {
  const authResult = await getServerSession()

  if (authResult?.user) {
    void serverApi(_api)
  }
}
