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
import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type StudyItemProgressCardProps = {
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export const StudyItemProgressCard: CFC<StudyItemProgressCardProps> = ({
  className,
}) => {
  const t = useTranslations("StudyItemDrawer");
  return (
    <div className={cn("w-full", className)}>
      <Card variant="accent">
        <CardHeader>
          <CardHeading>
            <CardTitle>{t("progressTitle")}</CardTitle>
          </CardHeading>
          <CardToolbar>
            <Button
              size="icon"
              variant="outline"
              className="scale-90 bg-transparent"
            >
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
