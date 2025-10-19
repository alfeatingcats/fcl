import { isNil } from "es-toolkit";
import { useMemo, type FC } from "react";
import { AlarmClockCheck } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { useRelativeTime } from "@/shared/lib/date";

import { EventBadge } from "../badge";
import type { RepetitionBadgeVariants } from "../badge/repetition-badge";

type CompletedEventDateTimeProps = {
  completedAt: Date | null;
} & RepetitionBadgeVariants;

export const CompletedEventDateTime: FC<CompletedEventDateTimeProps> = ({
  completedAt,
  wVariant,
}) => {
  const format = useFormatter();
  const relativeTime = useRelativeTime();
  const trs = useTranslations("RepetitionStatus");

  const eventDetails = useMemo(() => {
    if (isNil(completedAt)) {
      return trs("PENDING");
    }
    const formattedCompletedTime = format.dateTime(completedAt, {
      hour: "numeric",
      minute: "numeric",
    });
    const formattedRelativeTime = relativeTime(completedAt, new Date());

    return `${formattedRelativeTime} (${formattedCompletedTime})`;
  }, [completedAt, format, relativeTime, trs]);

  return (
    <EventBadge
      label={null}
      details={eventDetails}
      icon={<AlarmClockCheck className="mr-1" />}
      wVariant={wVariant}
    />
  );
};
