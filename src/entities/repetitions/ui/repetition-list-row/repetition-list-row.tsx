import type { FC } from "react";

import { Badge } from "@/components/ui/badge";

import { RepetitionStatus } from "../repetition-status";
import { type RepetitionsListRow } from "../../model/shared";
import { NextEventDateTime } from "../repetition-next-event-date-time";
import { Button } from "@/components/ui/button";
import { Check, Settings } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { RepetitionStage } from "../repetition-stage";

type RepetitionListRowProps = RepetitionsListRow;

export const RepetitionListRow: FC<RepetitionListRowProps> = ({
  title,
  scheduledAt,
  itemTags,
  description,
  status,
  repetitionNumber,
}) => {
  return (
    <div className="text-card-foreground bg-muted flex flex-col items-stretch !rounded-xl p-1">
      <div className="bg-card flex flex-col justify-start !rounded-xl p-4">
        <div className="flex gap-3">
          <span className="font-medium">{title}</span>
          <span className="flex flex-row gap-2">
            {itemTags.map((tag) => (
              <Badge
                key={tag.tagId}
                className={cn(`${tag.tag.color}`, "h-[22px]")}
              >
                {tag.tag.name}
              </Badge>
            ))}
          </span>
        </div>
        <div className="text-muted-foreground text-sm">{description}</div>
      </div>
      <div className="flex gap-4 px-2 pt-2 pb-1">
        <NextEventDateTime scheduledAt={scheduledAt} />
        <RepetitionStatus status={status} />
        <div className="flex flex-1 justify-end gap-1.5">
          <RepetitionStage currentStage={repetitionNumber} />
          {/* <Button size="xxs" variant="outline" className="rounded-md">
            <Check />
          </Button>
          <Button
            size="xxs"
            variant="outline"
            className="dark:border-accent-foreground/50 rounded-md border-2 !px-1 dark:bg-black"
          >
            <Settings />
          </Button> */}
        </div>
      </div>
    </div>
  );
};
