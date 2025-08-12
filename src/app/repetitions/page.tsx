import { StudyItem } from "@/features";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Repetitions() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // href={session ? "/api/auth/signout" : "/api/auth/signin"}
  //  {session ? "Sign out" : "Sign in";}
  const session = await auth();

  if (session?.user) {
    void api.studyItem.getAll.prefetch({ limit: 10 });
  }
  return (
    <HydrateClient>
      <main>{session?.user && <StudyItem />}</main>
    </HydrateClient>
  );
}
