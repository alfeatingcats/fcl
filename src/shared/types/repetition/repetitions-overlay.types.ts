import type { getActiveRepetitionDetails } from "@/shared/lib/repetition";
import type {
  OverlayEntityContent,
  RepetitionActionState,
  RepetitionActionType,
} from "@/shared/types";

import type { Dispatch, SetStateAction } from "react";

export type SetRepetitionActionState = Dispatch<
  SetStateAction<RepetitionActionState>
>;

export type RepetitionOverlayActionConfig = Record<
  RepetitionActionType,
  Pick<OverlayEntityContent, "overlay">
>;

export type UseRepetitionsOverlayEntityContentReturn =
  RepetitionOverlayActionConfig &
    Required<ReturnType<typeof getActiveRepetitionDetails>> & {
      onClear: () => void;
      setActiveRepetition: SetRepetitionActionState;
      activeRepetition: RepetitionActionState;
    };
