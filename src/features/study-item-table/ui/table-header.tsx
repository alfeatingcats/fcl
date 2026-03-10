import type { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { FilterIcon, TagIcon } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { ReadStudyItemInput } from "@/shared/api/schemas";

type StudyItemTableHeaderProps = {
  renderCreateButton?: ReactNode;
  form: UseFormReturn<ReadStudyItemInput>;
};

export const StudyItemTableHeader: FC<StudyItemTableHeaderProps> = ({
  renderCreateButton,
}) => {
  const t = useTranslations("StudyItemTable");
  return (
    <div className="flex items-center gap-3">
      <Input.Search
        className="peer ps-9 pe-9"
        placeholder={t("searchPlaceholder")}
      />
      <Button variant="outline">
        <FilterIcon />
        {t("status")}
      </Button>
      <Button variant="outline">
        <TagIcon />
        {t("tags")}
      </Button>
      <div className="flex flex-1 items-center justify-end">
        {renderCreateButton}
      </div>
    </div>
  );
};
