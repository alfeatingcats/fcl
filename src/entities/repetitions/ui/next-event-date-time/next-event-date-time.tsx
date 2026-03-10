import type { FC } from "react";
import { AlarmClock, ClockFading } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { useRelativeTime } from "@/shared/lib/date";
import type { LabeledComponentProps } from "@/shared/types";

import { EventBadge } from "../badge";
import type { RepetitionBadgeVariants } from "../badge/repetition-badge";

type NextEventDateTimeProps = {
  scheduledAt: Date;
} & LabeledComponentProps &
  RepetitionBadgeVariants;

export const NextEventDateTime: FC<NextEventDateTimeProps> = ({
  scheduledAt,
  withLabel = true,
  wVariant,
}) => {
  const format = useFormatter();
  const relativeTime = useRelativeTime();
  const t = useTranslations("Repetitions");

  const formattedScheduledTime = format.dateTime(scheduledAt, {
    hour: "numeric",
    minute: "numeric",
  });
  const formattedRelativeTime = relativeTime(scheduledAt, new Date());

  const nextEventLabel = t("next");
  const nextEventDetails = `${formattedRelativeTime} (${formattedScheduledTime})`;

  return (
    <EventBadge
      label={withLabel ? nextEventLabel : null}
      details={nextEventDetails}
      icon={<ClockFading className="mr-1 scale-x-[-1]" />}
      wVariant={wVariant}
    />
  );
};
