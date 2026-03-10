import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

import { tagsRouter } from "./routers/tags";
import { studyItemsRouter } from "./routers/study-items";
import { repetitionsRouter } from "./routers/repetitions";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tags: tagsRouter,
  studyItem: studyItemsRouter,
  repetitions: repetitionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
