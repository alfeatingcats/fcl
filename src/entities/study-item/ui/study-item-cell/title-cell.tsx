import type { FC } from "react";

type TitleCellProps = {
  title: string;
};

export const TitleCell: FC<TitleCellProps> = ({ title }) => (
  <div className="font-medium">{title}</div>
);
