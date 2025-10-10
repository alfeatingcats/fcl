import type { FC } from "react";
import { AlarmClock } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { useRelativeTime } from "@/shared/lib/date";

import { EventBadge } from "../badge";

type NextEventDateTimeProps = {
  scheduledAt: Date;
};

export const NextEventDateTime: FC<NextEventDateTimeProps> = ({
  scheduledAt,
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
      label={nextEventLabel}
      details={nextEventDetails}
      icon={<AlarmClock className="mr-1" />}
    />
  );
};
