"use client";
import { Expand, Info, PlusIcon } from "lucide-react";
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
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
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

      <DrawerContent className="!max-w-[25rem]">
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
