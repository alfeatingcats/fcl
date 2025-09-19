import type { ReactNode } from "react";
import { FilterIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type StudyItemTableHeaderProps = {
  renderCreateButton?: ReactNode;
};

export const StudyItemTableHeader = ({
  renderCreateButton,
}: StudyItemTableHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2 px-2">
      <Button variant="outline" size="sm">
        <FilterIcon />
        Filter
      </Button>
      {renderCreateButton}
    </div>
  );
};
