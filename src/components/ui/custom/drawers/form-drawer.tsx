"use client";
import { useTranslations } from "next-intl";
import { useMemo, type ComponentProps } from "react";
import { Expand, LoaderCircleIcon } from "lucide-react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

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
import { cn } from "@/shared/lib/utils";
import type { CFC, OverlayFormProps } from "@/shared/types";
import { Button } from "@/components/ui/button";

type FormDrawerProps = {
  title: string;
  description: string;
  onCancel?: () => void;
  isNestedDrawer?: boolean;
  submitButtonProps?: ComponentProps<typeof Button>;
  cancelButtonProps?: ComponentProps<typeof Button>;
  contentCN?: string;
} & Omit<OverlayFormProps<object>, "onSubmit">;

export const FormDrawer: CFC<FormDrawerProps> = ({
  title,
  isOpen,
  children,
  contentCN,
  description,
  onOpenChange,
  isLoading = false,
  isNestedDrawer = false,
  submitButtonProps: { children: submitButtonText, ...restSubmitProps } = {},
  cancelButtonProps: { children: cancelButtonText, ...restCancelProps } = {},
}) => {
  const DrawerComponent = useMemo(
    () => (isNestedDrawer ? DrawerNested : Drawer),
    [isNestedDrawer],
  );

  const t = useTranslations("UiActions");
  return (
    <DrawerComponent
      direction="right"
      open={isOpen}
      onOpenChange={onOpenChange}
      handleOnly={true}
    >
      <DrawerContent className={cn("max-w-136! py-6", contentCN)}>
        <OverlayScrollbarsComponent
          element="div"
          options={{
            scrollbars: { autoHide: "scroll" },
            overflow: { x: "hidden", y: "scroll" },
          }}
          defer
        >
          <div className="space-y-4 px-6 pb-0.5">
            <DrawerHeader className="mb-5 p-0">
              <DrawerTitle className="flex items-center justify-between">
                {title}
                <Button variant="ghost" size="sm">
                  <Expand />
                </Button>
              </DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>

            {children}
          </div>
        </OverlayScrollbarsComponent>

        <DrawerFooter className="flex flex-row gap-3 px-6 pb-0">
          <DrawerClose asChild>
            <Button className="flex-1" variant="outline" {...restCancelProps}>
              {cancelButtonText ?? t("cancel")}
            </Button>
          </DrawerClose>
          <Button className="flex-1" disabled={isLoading} {...restSubmitProps}>
            {isLoading ? (
              <LoaderCircleIcon className="size-4 animate-spin" />
            ) : null}
            {submitButtonText ?? t("submit")}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerComponent>
  );
};
