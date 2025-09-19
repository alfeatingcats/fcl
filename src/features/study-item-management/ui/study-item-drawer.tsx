"use client";
import { Expand, PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Drawer,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CFC } from "@/shared/types";
import { Button } from "@/components/ui/button";

import { ProgressStepper } from "./study-item-progress";
import type { CreateStudyItemInput } from "@/shared/api/schemas";
import type { UseFormReturn } from "react-hook-form";

type StudyItemDrawerProps = {
  isPending?: boolean;
  onCreate: ReturnType<UseFormReturn<CreateStudyItemInput>["handleSubmit"]>;
  isDrawerOpen: boolean;
  handleDrawerChange: (open: boolean) => void;
};
export const StudyItemDrawer: CFC<StudyItemDrawerProps> = ({
  onCreate,
  children,
  isDrawerOpen,
  isPending = false,
  handleDrawerChange,
}) => {
  const t = useTranslations("StudyItemDrawer");
  return (
    <Drawer
      direction="right"
      open={isDrawerOpen}
      onOpenChange={handleDrawerChange}
    >
      <div className="flex items-center justify-between gap-2 px-2">
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" disabled={isPending}>
            <PlusIcon />
            {t("createButton")}
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent>
        <div className="space-y-4 overflow-y-auto pb-0.5">
          <DrawerHeader className="-mb-1">
            <DrawerTitle className="flex items-center justify-between">
              {t("title")}
              <Button type="button" variant="ghost" size="sm">
                <Expand />
              </Button>
            </DrawerTitle>
            <DrawerDescription>{t("description")}</DrawerDescription>
          </DrawerHeader>

          {children}

          <div className="!w-full pr-4 pl-4">
            <Card className="dark:bg-input/30 mt-[1.6rem] bg-transparent py-4.5">
              <CardHeader className="px-4.5">
                <CardTitle>{t("progressTitle")}</CardTitle>
                <CardDescription className="-mb-2.5">
                  {t("progressDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4.5">
                <ProgressStepper />
              </CardContent>
            </Card>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={onCreate} disabled={isPending}>
            {t("submit")}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">{t("cancel")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
