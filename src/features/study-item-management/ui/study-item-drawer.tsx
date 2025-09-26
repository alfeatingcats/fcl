"use client";
import { Expand, Info } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import type { CFC } from "@/shared/types";
import { Button } from "@/components/ui/button";
import type { DrawerFormProps } from "@/shared/types";

import { ProgressStepper } from "./study-item-progress";

export const StudyItemDrawer: CFC<DrawerFormProps> = ({
  onCreate,
  children,
  isDrawerOpen,
  isPending = false,
  handleDrawerChange,
}) => {
  const t = useTranslations("StudyItemDrawer");
  const ta = useTranslations("UiActions");
  return (
    <Drawer
      direction="right"
      open={isDrawerOpen}
      onOpenChange={handleDrawerChange}
    >
      <DrawerContent className="!max-w-[28rem]">
        <div className="space-y-4 overflow-y-auto pb-0.5">
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

          <div className="!w-full pr-4 pl-4">
            <Card variant="accent">
              <CardHeader>
                <CardHeading>
                  <CardTitle>{t("progressTitle")}</CardTitle>
                </CardHeading>
                <CardToolbar>
                  <Button mode="icon" variant="outline" size="sm">
                    <Info />
                  </Button>
                </CardToolbar>
              </CardHeader>
              <CardContent>
                <ProgressStepper />
              </CardContent>
              <CardFooter className="text-sm leading-none font-medium">
                {t("progressDescription")}
              </CardFooter>
            </Card>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={onCreate} disabled={isPending}>
            {ta("submit")}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">{ta("cancel")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
