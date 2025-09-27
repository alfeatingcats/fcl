import { useId, useMemo } from "react";
import { useTranslations } from "next-intl";

import type { CFC } from "@/shared/types";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { PRESET_COLOR_CLASSES } from "@/shared/lib/const";
import { FormControl, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import type messages from "../../../../messages/en.json";
import { cn } from "@/shared/lib/utils";

type TagColorKeys = keyof typeof messages.TagColors;

type TagColorRadioGroupProps = {
  value?: string;
  onChange: (value: string) => void;
};

export const TagColorRadioGroup: CFC<TagColorRadioGroupProps> = ({
  value,
  onChange,
}) => {
  const id = useId();
  const t = useTranslations("TagColors");
  const tt = useTranslations("TagForm");

  const colors = useMemo(
    () =>
      PRESET_COLOR_CLASSES.map((colorCN) => {
        const colorName = colorCN
          .split(" ")
          .find((c) => c.startsWith("text-"))!
          .split("-")[1] as TagColorKeys;

        return { value: colorCN, label: t(colorName) };
      }),
    [t],
  );

  return (
    <RadioGroup
      defaultValue={value}
      onValueChange={onChange}
      className="gap-0 -space-y-px rounded-md shadow-xs"
    >
      {colors.map(({ label, value }) => (
        <div
          key={`${id}-${value}`}
          className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-2 px-3 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    id={`${id}-${value}`}
                    value={value}
                    className="after:absolute after:inset-0"
                    aria-describedby={`${`${id}-${value}`}-color`}
                  />
                </FormControl>
              </FormItem>
              <Label
                className="inline-flex items-start"
                htmlFor={`${id}-${value}`}
              >
                {label}
              </Label>
            </div>
            <Badge
              id={`${`${id}-${value}`}-color`}
              className={cn(value, "text-xs")}
            >
              {tt("titleLabel")}
            </Badge>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};
