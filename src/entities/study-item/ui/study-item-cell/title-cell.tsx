import { Link } from "@/i18n/routing";
import type { FC } from "react";

type TitleCellProps = {
  title: string;
  id: string;
};

export const TitleCell: FC<TitleCellProps> = ({ title, id }) => (
  <Link href={`my-skills/${id}`} className="text-primary font-medium">
    {title}
  </Link>
);
