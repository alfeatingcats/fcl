import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

import { RepetitionsClient } from "./client-repetitions";

const RepetitionsPage = async () => {
  const session = await auth();

  if (session?.user) {
    void api.studyItem.getAll.prefetch({ limit: 10 });
  }

  return (
    <HydrateClient>
      <RepetitionsClient />
    </HydrateClient>
  );
};

export default RepetitionsPage;
