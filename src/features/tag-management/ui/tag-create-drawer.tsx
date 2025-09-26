import { Expand, LoaderCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";

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
      <DrawerContent>
        <div className="space-y-4 pb-0.5">
          <DrawerHeader className="-mb-1">
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
