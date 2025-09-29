import type { FC } from "react";

import type {
  StudyItemStatusTKey,
  StudyItemStatusTranslations,
} from "@/shared/types";
import { Badge } from "@/components/ui/badge";

type StatusCellProps = {
  status: string;
  t: StudyItemStatusTranslations;
};

export const StatusCell: FC<StatusCellProps> = ({ status, t }) => {
  const _status: StudyItemStatusTKey = status as StudyItemStatusTKey;
  return <Badge>{t(_status)}</Badge>;
};
