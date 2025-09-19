import type { FC } from "react";

import { formatCreatedDate } from "../../model";

type CreatedCellProps = {
  createdAt: Date;
};

export const CreatedCell: FC<CreatedCellProps> = ({ createdAt }) => (
  <div>
    <span className="leading-none">{formatCreatedDate(createdAt)}</span>
  </div>
);
