import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

const HomePage = async () => {
  const authResult = await auth();

  if (authResult?.user) {
    void api.studyItem.getAll.prefetch({ limit: 10 });
  }

  return (
    <HydrateClient>
      <main>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </main>
    </HydrateClient>
  );
};

export default HomePage;
