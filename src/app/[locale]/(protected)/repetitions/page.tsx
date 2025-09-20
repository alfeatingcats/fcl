import { ErrorBoundary, Suspense } from "@suspensive/react";

import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

import { StudyItemsPage } from "@/widgets/study-items-page";

const RepetitionsPage = async () => {
  const authResult = await auth();

  if (authResult?.user) {
    void api.studyItem.getAll.prefetch({ limit: 10 });
  }

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <StudyItemsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default RepetitionsPage;
