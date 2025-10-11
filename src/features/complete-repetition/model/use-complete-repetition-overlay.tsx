'use client"';

import { isNull } from "es-toolkit";
import { useCallback, useMemo, useState } from "react";

import type {
  CompleteRepetitionDialogState,
  OnCompleteRepetition,
} from "@/entities/repetitions";
import type { UseFormOverlayReturn } from "@/shared/types";
import type { CompleteRepetitionInput } from "@/shared/api/schemas";

import { useCompleteRepetitionForm } from "./use-complete-repetition-form";
import { useCompleteRepetition } from "./use-complete-repetition";

type UseCompleteRepetitionOverlayReturn = UseFormOverlayReturn<
  CompleteRepetitionInput,
  OnCompleteRepetition
> & { activeRepetitionId: CompleteRepetitionDialogState };

export const useCompleteRepetitionOverlay =
  (): UseCompleteRepetitionOverlayReturn => {
    const [activeRepetitionId, setActiveRepetitionId] =
      useState<CompleteRepetitionDialogState>(null);

    const { handleCompleteRepetition, isLoading } = useCompleteRepetition({
      onSuccess: () => {
        handleOpenChange(null);
      },
    });

    const { form } = useCompleteRepetitionForm(isLoading);

    const handleOpenChange = useCallback(
      (id: CompleteRepetitionDialogState) => {
        if (isNull(id)) {
          form.reset();
          setActiveRepetitionId(null);
          return;
        }
        setActiveRepetitionId(id);
        form.setValue("repetitionId", id);
      },
      [form, setActiveRepetitionId],
    );

    return useMemo(
      () => ({
        form,
        isOpen: !isNull(activeRepetitionId),
        onSubmit: handleCompleteRepetition,
        isLoading,
        handleOpenChange,
        activeRepetitionId,
      }),
      [
        form,
        activeRepetitionId,
        handleCompleteRepetition,
        isLoading,
        handleOpenChange,
      ],
    );
  };
