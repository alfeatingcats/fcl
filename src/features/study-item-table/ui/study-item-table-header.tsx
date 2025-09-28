import type { ReactNode } from "react";
import { FilterIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";

type StudyItemTableHeaderProps = {
  renderCreateButton?: ReactNode;
};

export const StudyItemTableHeader = ({
  renderCreateButton,
}: StudyItemTableHeaderProps) => {
  const t = useTranslations("StudyItemTable");
  return (
    <div className="flex items-center gap-3">
      <Input.Search
        className="peer ps-9 pe-9"
        placeholder={t("searchPlaceholder")}
      />
      <Button variant="outline">
        <FilterIcon />
        {t("filter")}
      </Button>
      <div className="flex flex-1 items-center justify-end">
        {renderCreateButton}
      </div>
    </div>
  );
};
