import type { LucideIcon } from "lucide-react";
import {
  cloneElement,
  createElement,
  isValidElement,
  type FC,
  type ReactElement,
} from "react";

type HeaderCellProps = {
  title: string;
  icon: LucideIcon | ReactElement;
};

export const HeaderCell: FC<HeaderCellProps> = ({ title, icon }) => {
  const iconElement = isValidElement(icon)
    ? cloneElement(icon as ReactElement<{ className?: string }>, {
        className: "size-3 text-black dark:text-white",
      })
    : createElement(icon, {
        className: "size-3 text-black dark:text-white",
      });

  return (
    <div className="flex items-center gap-2">
      {/* <span className="">{iconElement}</span> */}
      <span className="font-normal text-black dark:text-white">{title}</span>
    </div>
  );
};
