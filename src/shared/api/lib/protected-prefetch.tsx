"use server";

import { auth } from "@/server/auth";
import { api as _api } from "@/trpc/server";

export const protectedApiPrefetch = async (
  serverApi: (api: typeof _api) => unknown,
) => {
  const authResult = await auth();

  if (authResult?.user) {
    void serverApi(_api);
  }
};
