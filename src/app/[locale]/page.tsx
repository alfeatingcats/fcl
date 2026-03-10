import { HydrateClient } from "@/trpc/server";

const HomePage = async () => {
  return (
    <HydrateClient>
      <main>
        <h1>Welcome to Focu</h1>
        <p>Your personal productivity assistant.</p>
      </main>
    </HydrateClient>
  );
};

export default HomePage;
