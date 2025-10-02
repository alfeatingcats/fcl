import type { FC } from "react";
import { useTranslations } from "next-intl";
import { SquircleDashed } from "lucide-react";

import type { RepetitionStatusTKey } from "@/shared/types";

import { EventBadge } from "../repetition-badge";

type RepetitionStatusProps = {
  status: RepetitionStatusTKey;
};

export const RepetitionStatus: FC<RepetitionStatusProps> = ({ status }) => {
  const t = useTranslations("StudyItemTable");
  const tr = useTranslations("RepetitionStatus");

  const repetitionStatus = t("status");
  const statusDescription = tr(status);

  return (
    <EventBadge
      label={repetitionStatus}
      details={statusDescription}
      icon={<SquircleDashed className="mr-1" />}
    />
  );
};
