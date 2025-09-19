import type { FC } from "react";

import { Badge } from "@/components/ui/badge";
import { formatStudyItemStatus } from "../../model";

type StatusCellProps = {
  status: string;
};

export const StatusCell: FC<StatusCellProps> = ({ status }) => (
  <Badge>{formatStudyItemStatus(status)}</Badge>
);
