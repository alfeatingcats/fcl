import { useCallback, useMemo } from "react";
import type { RouterInputs } from "@/trpc/react";
import type { UseFormReturn } from "react-hook-form";

import type { TrpcMutationHook } from "@/shared/api/types";
import type { RepetitionActionState } from "@/shared/types";
import type { SkipRepetitionInput } from "@/shared/api/schemas";

import { useRepetitionActionState } from "./use-repetition-action-state";

export const createRepetitionAction = <
  TFormData extends SkipRepetitionInput,
  TPath extends keyof RouterInputs,
  TKey extends keyof RouterInputs[TPath],
>(
  useMutationHook: TrpcMutationHook<
    TPath,
    TKey,
    object | void,
    object | void,
    unknown
  >,
  useFormHook: (isLoading: boolean) => UseFormReturn<TFormData>,
) => {
  type TInput = RouterInputs[TPath][TKey];

  return (state: RepetitionActionState, onClear: () => void) => {
    const { mutate, isPending } = useMutationHook({ onSuccess: onClear });
    const form = useFormHook(isPending);

    useRepetitionActionState(form, state.repetitionId);

    const handleSubmit = useCallback(
      (data: TFormData & TInput) => mutate(data),
      [mutate],
    );

    return useMemo(
      () => ({
        form,
        isLoading: isPending,
        onSubmit: handleSubmit,
      }),
      [form, isPending, handleSubmit],
    );
  };
};
