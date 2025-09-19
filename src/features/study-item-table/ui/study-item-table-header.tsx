import type { ReactNode } from "react";
import { FilterIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type StudyItemTableHeaderProps = {
  renderCreateButton?: ReactNode;
};

export const StudyItemTableHeader = ({
  renderCreateButton,
}: StudyItemTableHeaderProps) => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex items-center justify-between gap-2 px-2">
      {t("title")}
      <Button variant="outline" size="sm">
        <FilterIcon />
        Filter
      </Button>
      {renderCreateButton}
    </div>
  );
};
