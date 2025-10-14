import {
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useTranslations } from "next-intl";

import type {
  OverlayEntityContent,
  RepetitionActionState,
  RepetitionActionType,
} from "@/shared/types";
import type { RepetitionsListRow } from "@/entities/repetitions";
import { defaultRepetitionActionState } from "@/shared/lib/repetitions.libs";

import { getActiveRepetitionDetails } from "../utils";

export type SetRepetitionActionState = Dispatch<
  SetStateAction<RepetitionActionState>
>;

type UseRepetitionsOverlayEntityContentReturn = Record<
  RepetitionActionType,
  Pick<OverlayEntityContent, "overlay">
> &
  Required<ReturnType<typeof getActiveRepetitionDetails>> & {
    onClear: () => void;
    setActiveRepetition: SetRepetitionActionState;
    activeRepetition: RepetitionActionState;
  };

export const useRepetitionsOverlayEntityContent = (
  data: Array<RepetitionsListRow>,
): UseRepetitionsOverlayEntityContentReturn => {
  const t = useTranslations("Repetitions");

  const [activeRepetition, setActiveRepetition] =
    useState<RepetitionActionState>({ repetitionId: null, action: null });

  const handleClearActiveRepetition = useCallback(() => {
    setActiveRepetition(defaultRepetitionActionState);
  }, [setActiveRepetition]);

  const activeRepetitionDetails = useMemo(
    () => getActiveRepetitionDetails(data, activeRepetition.repetitionId),
    [activeRepetition, data],
  );

  return useMemo(
    () => ({
      complete: {
        overlay: {
          title: t("completeButton"),
          description: t("completeRepetitionDescription"),
        },
      },
      skip: {
        overlay: {
          title: t("skipOverlayTitle"),
          description: t("skipRepetitionDescription"),
        },
      },
      wait: {
        overlay: {
          title: t("waitOverlayTitle"),
          description: t("waitRepetitionDescription"),
        },
      },
      ...activeRepetitionDetails!,
      onClear: handleClearActiveRepetition,
      setActiveRepetition,
      activeRepetition,
    }),
    [activeRepetition, activeRepetitionDetails, handleClearActiveRepetition, t],
  );
};
