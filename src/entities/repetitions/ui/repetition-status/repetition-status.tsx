import { useMemo, type FC } from "react";
import { useTranslations } from "next-intl";
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleOff,
} from "lucide-react";

import type {
  LabeledComponentProps,
  RepetitionStatusTKey,
} from "@/shared/types";

import { EventBadge } from "../badge";
import type { RepetitionBadgeVariants } from "../badge/repetition-badge";

type RepetitionStatusProps = {
  status: RepetitionStatusTKey;
} & LabeledComponentProps &
  RepetitionBadgeVariants;

export const RepetitionStatus: FC<RepetitionStatusProps> = ({
  status,
  withLabel = true,
  wVariant,
}) => {
  const t = useTranslations("StudyItemTable");
  const tr = useTranslations("RepetitionStatus");

  const repetitionStatus = t("status");
  const statusDescription = tr(status);
  const statusIcon = useMemo(() => {
    switch (status) {
      case "PENDING":
        return <CircleDashed className="mr-1" />;
      case "COMPLETED":
        return <CircleCheck className="mr-1" />;
      case "MISSED":
        return <CircleAlert className="mr-1" />;
      case "SKIPPED":
        return <CircleOff className="mr-1" />;
      default:
        return <CircleDashed className="mr-1" />;
    }
  }, [status]);

  return (
    <EventBadge
      wVariant={wVariant}
      label={withLabel ? repetitionStatus : null}
      details={statusDescription}
      icon={statusIcon}
    />
  );
};
