import { useTranslations } from "next-intl";
import type { FC } from "react";
import { EventBadge } from "../badge";
import { Waypoints } from "lucide-react";
import { EBBINGHAUS_INTERVALS } from "@/shared/lib/const";

type RepetitionStageProps = {
  currentStage: number | string;
};
export const RepetitionStage: FC<RepetitionStageProps> = ({ currentStage }) => {
  const t = useTranslations("Repetitions");
  return (
    <EventBadge
      label={t("stageLabel")}
      details={t("stageCount", {
        current: `${currentStage}`,
        total: `${EBBINGHAUS_INTERVALS.length}`,
      })}
      icon={<Waypoints className="mr-1" />}
    />
  );
};
