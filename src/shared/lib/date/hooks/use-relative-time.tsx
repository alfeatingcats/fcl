import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import { useTranslations } from "next-intl";
import { useDateFnsConfig } from "./use-date-fns-config";

export const useRelativeTime = () => {
  const t = useTranslations("Time");
  const { withTZ } = useDateFnsConfig();

  return (from: Date, to: Date) => {
    const dateFrom = withTZ(from);
    const dateTo = withTZ(to);

    // minutes
    const diffInMinutes = differenceInMinutes(dateTo, dateFrom);
    const isPast = dateTo > dateFrom;
    const absMinutes = Math.abs(diffInMinutes);

    if (absMinutes < 1) return t("now");

    if (absMinutes < 60) {
      return isPast
        ? t("minutesAgo", { count: absMinutes })
        : t("inMinutes", { count: absMinutes });
    }

    // hours
    const diffInHours = differenceInHours(dateTo, dateFrom);
    const absHours = Math.abs(diffInHours);

    if (absHours < 24) {
      return isPast
        ? t("hoursAgo", { count: absHours })
        : t("inHours", { count: absHours });
    }

    // days
    const diffInDays = differenceInDays(dateTo, dateFrom);
    const absDays = Math.abs(diffInDays);

    if (absDays < 7) {
      return isPast
        ? t("daysAgo", { count: absDays })
        : t("inDays", { count: absDays });
    }

    // weeks
    const diffInWeeks = differenceInWeeks(dateTo, dateFrom);
    const absWeeks = Math.abs(diffInWeeks);

    if (absWeeks < 5) {
      return isPast
        ? t("weeksAgo", { count: absWeeks })
        : t("inWeeks", { count: absWeeks });
    }

    // months
    const diffInMonths = differenceInMonths(dateTo, dateFrom);
    const absMonths = Math.abs(diffInMonths);

    if (absMonths < 12) {
      return isPast
        ? t("monthsAgo", { count: absMonths })
        : t("inMonths", { count: absMonths });
    }

    // years
    const diffInYears = differenceInYears(dateTo, dateFrom);
    const absYears = Math.abs(diffInYears);

    return isPast
      ? t("yearsAgo", { count: absYears })
      : t("inYears", { count: absYears });
  };
};
