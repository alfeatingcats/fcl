import type { FC } from "react";
import { useTranslations } from "next-intl";
import type { ControllerRenderProps } from "react-hook-form";

import { Label } from "@/components/ui/label";
import type { CompleteRepetitionInput } from "@/shared/api/schemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RadioGroupDifficultyProps = ControllerRenderProps<
  CompleteRepetitionInput,
  "difficulty"
>;

export const RadioGroupDifficulty: FC<RadioGroupDifficultyProps> = ({
  name,
  value,
  onBlur,
  onChange,
  disabled,
}) => {
  const t = useTranslations("Repetitions");
  return (
    <div>
      <div className="space-y-4">
        <RadioGroup
          className="flex gap-0 -space-x-px rounded-md shadow-xs"
          onValueChange={(val) => onChange(Number(val))}
          value={value?.toString() ?? ""}
          name={name}
          onBlur={onBlur}
          disabled={disabled}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <Label
              key={number}
              id={number.toString()}
              className="border-input has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-data-[state=checked]:border-primary/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:z-10"
            >
              <RadioGroupItem
                id={number.toString()}
                value={number.toString()}
                className="sr-only after:absolute after:inset-0"
              />
              {number}
            </Label>
          ))}
        </RadioGroup>
      </div>
      <div className="text-muted-foreground mt-2 flex justify-between text-xs">
        <p>{t("veryEasy")}</p>
        <p>{t("veryDifficult")}</p>
      </div>
    </div>
  );
};
