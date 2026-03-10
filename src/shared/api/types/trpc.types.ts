import type { TRPCClientErrorLike } from "@trpc/client";
import type { UseTRPCMutationResult } from "@trpc/react-query/shared";

import type { AppRouter } from "@/server/api/root";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { CallbackHandlers } from "@/shared/types";

type RouterInputs = inferRouterInputs<AppRouter>;
type RouterOutputs = inferRouterOutputs<AppRouter>;

export type MutationResult<
  TPath extends keyof RouterInputs,
  TKey extends keyof RouterInputs[TPath],
  TContext = unknown,
> = UseTRPCMutationResult<
  RouterOutputs[TPath][TKey],
  TRPCClientErrorLike<AppRouter>,
  RouterInputs[TPath][TKey],
  TContext
>;

/**
 * Universal generic for useMutation hooks
 *
 * Example:
 * type UseCreateStudyItem = TrpcMutationHook<"studyItem", "create">;
 */
export type TrpcMutationHook<
  TPath extends keyof RouterInputs,
  TKey extends keyof RouterInputs[TPath],
  S = { name: string },
  E = { name: string },
  TContext = unknown,
> = (handlers: CallbackHandlers<S, E>) => MutationResult<TPath, TKey, TContext>;
