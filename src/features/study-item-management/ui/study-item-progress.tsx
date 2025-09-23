import { type FC } from "react";
import { PartyPopper } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { generateStepsServer } from "../model/utils";

type BadgeContentProps = {
  diff: string | null;
  isLast: boolean;
};

const BadgeContent: FC<BadgeContentProps> = ({ diff, isLast }) => {
  const t = useTranslations("ProgressStepper");
  if (!diff) return <>{t("start")}</>;
  if (isLast)
    return (
      <>
        <PartyPopper /> {diff}
      </>
    );
  return <>{diff}</>;
};

export const ProgressStepper = () => {
  const format = useFormatter();
  const steps = generateStepsServer(format);
  return (
    <div className="!w-full space-y-8 text-start">
      <Stepper defaultValue={1} orientation="vertical" className="!w-full">
        {steps.map(({ step, date, diff, tooltip }, index, _steps) => (
          <StepperItem
            key={step}
            step={step}
            className="relative !w-full items-start not-last:flex-1"
          >
            <StepperTrigger
              asChild
              className="!w-full items-start rounded pb-6 last:pb-0"
            >
              <div className="flex w-full items-start gap-2">
                <StepperIndicator />
                <div className="mt-0.5 w-full px-2 text-left">
                  <StepperTitle className="flex items-center justify-between gap-2">
                    <Tooltip>
                      <TooltipTrigger>{date}</TooltipTrigger>
                      <TooltipContent>{tooltip}</TooltipContent>
                    </Tooltip>
                    <Badge className="flex items-center gap-2">
                      <BadgeContent
                        diff={diff}
                        isLast={_steps.length === index + 1}
                      />
                    </Badge>
                  </StepperTitle>
                </div>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="bg-muted absolute top-6 left-3 -order-1 m-0 h-6 w-0.5 -translate-x-1/2" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
};
