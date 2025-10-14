import { useMemo } from "react";
import type { UseFormReturn } from "react-hook-form";

import type { RepetitionActionState } from "@/shared/types";
import type { SkipRepetitionInput } from "@/shared/api/schemas";

import { useRepetitionActionState } from "./use-repetition-action-state";

export const createRepetitionAction = <TFormData extends SkipRepetitionInput>(
  useMutationHook: (callbacks: { onSuccess: () => void }) => {
    mutate: (data: TFormData) => void;
    isLoading: boolean;
  },
  useFormHook: (isLoading: boolean) => {
    form: UseFormReturn<TFormData>;
  },
) => {
  return (state: RepetitionActionState, onClear: () => void) => {
    const { mutate, isLoading } = useMutationHook({ onSuccess: onClear });
    const { form } = useFormHook(isLoading);

    useRepetitionActionState(form, state.repetitionId);

    return useMemo(
      () => ({
        form,
        isLoading,
        onSubmit: mutate,
      }),
      [form, mutate, isLoading],
    );
  };
};
