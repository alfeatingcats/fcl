"use client";
import { Expand, LoaderCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, type ComponentProps } from "react";

import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerDescription,
  DrawerNested,
} from "@/components/ui/drawer";
import type { CFC } from "@/shared/types";
import { Button } from "@/components/ui/button";
import type { DrawerFormProps } from "@/shared/types";
import { cn } from "@/shared/lib/utils";

type FormDrawerProps = {
  title: string;
  description: string;
  onCancel?: () => void;
  isNestedDrawer?: boolean;
  submitButtonProps?: ComponentProps<typeof Button>;
  cancelButtonProps?: ComponentProps<typeof Button>;
  contentCN?: string;
} & Omit<DrawerFormProps, "onCreate">;

export const FormDrawer: CFC<FormDrawerProps> = ({
  title,
  children,
  contentCN,
  description,
  isDrawerOpen,
  isPending = false,
  isNestedDrawer = false,
  submitButtonProps: { children: submitButtonText, ...restSubmitProps } = {},
  cancelButtonProps: { children: cancelButtonText, ...restCancelProps } = {},
  handleDrawerChange,
}) => {
  const DrawerComponent = useMemo(
    () => (isNestedDrawer ? DrawerNested : Drawer),
    [isNestedDrawer],
  );

  const t = useTranslations("UiActions");
  return (
    <DrawerComponent
      direction="right"
      open={isDrawerOpen}
      onOpenChange={handleDrawerChange}
    >
      <DrawerContent className={cn("!max-w-[28rem] p-6", contentCN)}>
        <div className="space-y-4 overflow-y-auto pb-0.5">
          <DrawerHeader className="mb-5 p-0">
            <DrawerTitle className="flex items-center justify-between">
              {title}
              <Button mode="icon" variant="outline" size="sm">
                <Expand />
              </Button>
            </DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>

          {children}
        </div>

        <DrawerFooter className="px-0 pb-0">
          <Button disabled={isPending} {...restSubmitProps}>
            {isPending ? (
              <LoaderCircleIcon className="size-4 animate-spin" />
            ) : null}
            {submitButtonText ?? t("submit")}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" {...restCancelProps}>
              {cancelButtonText ?? t("cancel")}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerComponent>
  );
};
