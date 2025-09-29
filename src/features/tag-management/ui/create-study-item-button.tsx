import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ButtonHTMLAttributes } from "react";

interface CreateStudyItemButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCreating?: boolean;
}

export const CreateStudyItemButton = ({
  isCreating,
  ...props
}: CreateStudyItemButtonProps) => {
  const t = useTranslations("StudyItemDrawer");
  return (
    <Button disabled={isCreating} {...props}>
      <PlusIcon />
      {t("createButton")}
    </Button>
  );
};
