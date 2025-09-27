import { useTranslations } from "next-intl";
import { Expand, LoaderCircleIcon } from "lucide-react";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerNested,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
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
  const ta = useTranslations("UiActions");
  return (
    <DrawerNested
      direction="right"
      open={isDrawerOpen}
      onOpenChange={handleDrawerChange}
    >
      <DrawerContent className="p-6">
        <div className="pb-0.5">
          <DrawerHeader className="mb-5 p-0">
            <DrawerTitle className="flex items-center justify-between">
              {t("title")}
              <Button mode="icon" variant="outline" size="sm">
                <Expand />
              </Button>
            </DrawerTitle>
            <DrawerDescription>{t("description")}</DrawerDescription>
          </DrawerHeader>
          {children}
        </div>
        <DrawerFooter>
          <Button onClick={onCreate} disabled={isPending}>
            {isPending ? (
              <LoaderCircleIcon className="size-4 animate-spin" />
            ) : null}
            {ta("submit")}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">{ta("cancel")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerNested>
  );
};
