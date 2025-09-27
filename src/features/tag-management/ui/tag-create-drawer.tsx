import { useTranslations } from "next-intl";

import { FormDrawer } from "@/components/ui/custom";
import type { CreateTagInput } from "@/shared/api/schemas";
import type { CFC, DrawerFormProps } from "@/shared/types";

type TagCreateDrawerProps = DrawerFormProps<CreateTagInput>;

export const TagCreateDrawer: CFC<TagCreateDrawerProps> = ({
  onCreate,
  children,
  isPending,
  isDrawerOpen,
  handleDrawerChange,
}) => {
  const t = useTranslations("TagDrawer");

  return (
    <FormDrawer
      contentCN="!max-w-sm"
      isNestedDrawer
      title={t("title")}
      isDrawerOpen={isDrawerOpen}
      description={t("description")}
      submitButtonProps={{
        onClick: () => void onCreate(),
        disabled: isPending,
      }}
      handleDrawerChange={handleDrawerChange}
    >
      {children}
    </FormDrawer>
  );
};
