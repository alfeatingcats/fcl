import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

import { steps } from "../lib";
import { Badge } from "@/components/ui/badge";
import { PartyPopper, Play } from "lucide-react";
import { type FC } from "react";

type BadgeContentProps = {
  diff: string | null;
  isLast: boolean;
};
const BadgeContent: FC<BadgeContentProps> = ({ diff, isLast }) => {
  if (!diff)
    return (
      <>
        <Play /> Start
      </>
    );
  if (isLast)
    return (
      <>
        <PartyPopper /> {diff}
      </>
    );
  return <>{diff}</>;
};

export const ProgressStepper = () => {
  return (
    <div className="space-y-8 text-start">
      <Stepper defaultValue={1} orientation="vertical">
        {steps.map(({ step, date, diff }, index, _steps) => (
          <StepperItem
            key={step}
            step={step}
            className="relative items-start not-last:flex-1"
          >
            <StepperTrigger className="items-start rounded pb-6 last:pb-0">
              <StepperIndicator />
              <div className="mt-0.5 px-2 text-left">
                <StepperTitle className="flex items-center gap-2">
                  {date}
                  <Badge className="flex items-center gap-2">
                    <BadgeContent
                      diff={diff}
                      isLast={_steps.length === index + 1}
                    />
                  </Badge>
                </StepperTitle>
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
