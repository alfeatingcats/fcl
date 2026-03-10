import type { FC } from "react";
import type { IntlFormatter } from "@/shared/types";

import { formatCreatedDate } from "../../model/utils";

type CreatedCellProps = {
  createdAt: Date;
  format: IntlFormatter;
};

export const CreatedCell: FC<CreatedCellProps> = ({ createdAt, format }) => (
  <div>
    <span className="leading-none">{formatCreatedDate(createdAt, format)}</span>
  </div>
);
