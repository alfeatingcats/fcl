import { capitalize } from "es-toolkit";
import { replace } from "es-toolkit/compat";
import type { StudyItem } from "@prisma/client";
import type { createFormatter } from "next-intl";

export const formatStudyItemStatus = (status: string) =>
  replace(capitalize(status), "_", " ");

export const canRowExpand = (item: StudyItem) => Boolean(item.description);

export type Locale = string | undefined;

export function formatDiff(prev: Date | null, next: Date): string {
  if (!prev) return "";

  const diffMs = next.getTime() - prev.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);

  if (diffMinutes < 60) return `in ${diffMinutes} mins`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `in ${diffHours} hrs`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `in ${diffDays} days`;
  const diffWeeks = Math.floor(diffDays / 7);
  return `in ${diffWeeks} weeks`;
}

export function formatCreatedDate(
  date: Date,
  format: ReturnType<typeof createFormatter>,
) {
  return format.dateTime(date, { dateStyle: "short" });
}
