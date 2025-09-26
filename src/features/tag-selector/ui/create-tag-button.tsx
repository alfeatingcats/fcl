import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ButtonHTMLAttributes } from "react";

export const CreateTagButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const t = useTranslations("TagsSelector");
  return (
    <Button className="mx-auto w-full max-w-96" {...props}>
      <PlusIcon />
      {t("createTag")}
    </Button>
  );
};
