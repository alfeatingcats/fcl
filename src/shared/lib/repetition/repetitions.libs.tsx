import type { RepetitionsListRow } from "@/entities/repetitions";
import type { RepetitionOverlayPayload, Repetitions } from "@/shared/types";
import type { RepetitionOverlayActionConfig } from "@/shared/types/repetition/repetitions-overlay.types";
import { isNil, pick } from "es-toolkit";
import { isEmpty } from "es-toolkit/compat";

export const defaultRepetitionActionState = {
  repetitionId: null,
  action: null,
};

export const getRepetitionOverlayConfig = (
  t: Repetitions,
): RepetitionOverlayActionConfig => {
  return {
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
  };
};

export const getActiveRepetitionDetails = (
  repetitions: Array<RepetitionsListRow>,
  activeRepetitionId: RepetitionOverlayPayload,
) => {
  if (isNil(activeRepetitionId) || isEmpty(repetitions) || isNil(repetitions)) {
    return null;
  }
  return pick(repetitions.find(({ id }) => id === activeRepetitionId)!, [
    "title",
    "description",
    "repetitionNumber",
  ]);
};
