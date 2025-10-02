import { useTranslations } from "next-intl";
import type { FC } from "react";
import { DefaultBadge } from "../repetition-badge";
import { Waypoints } from "lucide-react";
import { EBBINGHAUS_INTERVALS } from "@/shared/lib/const";

type RepetitionStageProps = {
  readonly currentStage: number | string;
};
export const RepetitionStage: FC<RepetitionStageProps> = ({ currentStage }) => {
  const t = useTranslations("Repetitions");
  return (
    <div>
      <DefaultBadge>
        <Waypoints className="mr-1" />
        {t("stageProgress", {
          current: `${currentStage}`,
          total: `${EBBINGHAUS_INTERVALS.length}`,
        })}
      </DefaultBadge>
    </div>
  );
};
