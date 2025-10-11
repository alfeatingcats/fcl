import { useTranslations } from "next-intl";

import { FormDrawer } from "@/components/ui/custom";
import type { CreateTagInput } from "@/shared/api/schemas";
import type { CFC, OverlayFormProps } from "@/shared/types";

type TagCreateDrawerProps = OverlayFormProps<CreateTagInput>;

export const TagCreateDrawer: CFC<TagCreateDrawerProps> = ({
  isOpen,
  onSubmit,
  children,
  isLoading,
  onOpenChange,
}) => {
  const t = useTranslations("TagDrawer");
  const ta = useTranslations("UiActions");

  return (
    <FormDrawer
      contentCN="!max-w-sm"
      isNestedDrawer
      title={t("title")}
      isOpen={isOpen}
      description={t("description")}
      submitButtonProps={{
        onClick: () => void onSubmit(),
        disabled: isLoading,
        children: ta("create"),
      }}
      onOpenChange={onOpenChange}
    >
      {children}
    </FormDrawer>
  );
};
