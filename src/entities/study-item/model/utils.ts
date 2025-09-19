import { capitalize } from "es-toolkit";
import { replace } from "es-toolkit/compat";
import { format } from "date-fns";
import type { StudyItem } from "@prisma/client";

export const formatStudyItemStatus = (status: string) =>
  replace(capitalize(status), "_", " ");

export const formatCreatedDate = (date: Date) => format(date, "yyyy-MM-dd");

export const canRowExpand = (item: StudyItem) => Boolean(item.description);
