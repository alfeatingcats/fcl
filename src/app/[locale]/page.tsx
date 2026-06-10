import { LandngPage } from '@/widgets/landing-page'

import { HydrateClient } from '@/trpc/server'

const HomePage = async () => {
  return (
    <HydrateClient>
      <main className="w-screen h-screen">
        <LandngPage />
      </main>
    </HydrateClient>
  )
}

export default HomePage
