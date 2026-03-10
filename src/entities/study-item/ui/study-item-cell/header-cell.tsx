import { cn } from "@/shared/lib/utils";
import type { LucideIcon } from "lucide-react";
import { type FC, type ReactElement } from "react";

type HeaderCellProps = {
  title: string;
  icon: LucideIcon | ReactElement;
  className?: string;
};

export const HeaderCell: FC<HeaderCellProps> = ({ title, className }) => {
  // const iconElement = isValidElement(icon)
  //   ? cloneElement(icon as ReactElement<{ className?: string }>, {
  //       className: "size-3 text-black dark:text-white",
  //     })
  //   : createElement(icon, {
  //       className: "size-3 text-black dark:text-white",
  //     });

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* <span className="">{iconElement}</span> */}
      <span className="font-normal text-black dark:text-white">{title}</span>
    </div>
  );
};
