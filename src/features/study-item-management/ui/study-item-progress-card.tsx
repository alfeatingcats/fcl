import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressStepper } from "./study-item-progress";
import type { CFC } from "@/shared/types";

export const StudyItemProgressCard: CFC = () => {
  const t = useTranslations("StudyItemDrawer");
  return (
    <div className="!w-full">
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
  );
};
