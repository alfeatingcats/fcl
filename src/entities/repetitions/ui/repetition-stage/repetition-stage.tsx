import type { FC, ReactNode } from "react";
import { Waypoints } from "lucide-react";
import { useTranslations } from "next-intl";

import { EBBINGHAUS_INTERVALS } from "@/shared/lib/const";
import type { LabeledComponentProps } from "@/shared/types";

import { EventBadge } from "../badge";
import type { RepetitionBadgeVariants } from "../badge/repetition-badge";

type RepetitionStageProps = {
  currentStage: number | string;
  icon?: ReactNode | null;
} & LabeledComponentProps &
  RepetitionBadgeVariants;

export const RepetitionStage: FC<RepetitionStageProps> = ({
  currentStage,
  withLabel = true,
  wVariant,
  icon,
}) => {
  const t = useTranslations("Repetitions");
  return (
    <EventBadge
      wVariant={wVariant}
      label={withLabel ? t("stageLabel") : null}
      details={t("stageCount", {
        current: `${currentStage}`,
        total: `${EBBINGHAUS_INTERVALS.length}`,
      })}
      icon={icon && <Waypoints className="mr-1" />}
    />
  );
};
