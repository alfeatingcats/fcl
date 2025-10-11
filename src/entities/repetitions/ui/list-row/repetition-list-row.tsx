import type { FC } from "react";

import { Badge } from "@/components/ui/badge";

import { RepetitionStatus } from "../repetition-status";
import {
  type OnCompleteRepetition,
  type RepetitionsListRow,
} from "../../model/shared";
import { NextEventDateTime } from "../next-event-date-time";
import { cn } from "@/shared/lib/utils";
import { RepetitionStage } from "../repetition-stage";
import { CardDropdown } from "../card-dropdown";

type RepetitionListRowProps = RepetitionsListRow & {
  onCompleteRepetition: OnCompleteRepetition;
};

export const RepetitionListRow: FC<RepetitionListRowProps> = ({
  title,
  scheduledAt,
  itemTags,
  description,
  status,
  repetitionNumber,
  id,
  onCompleteRepetition,
}) => {
  return (
    <div className="text-card-foreground bg-muted flex flex-col items-stretch !rounded-xl p-1">
      <div className="bg-card flex h-full flex-col justify-start !rounded-xl p-4">
        <div className="flex gap-3">
          <span className="truncate font-medium">{title}</span>
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
        <div className="text-muted-foreground line-clamp-2 text-sm">
          {description}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-1 flex-wrap gap-4 gap-y-1 px-2 pt-2 pb-1">
          <RepetitionStage currentStage={repetitionNumber} />
          <RepetitionStatus status={status} />
          <NextEventDateTime scheduledAt={scheduledAt} />
        </div>
        <div className="flex h-full items-start pt-2 pr-2">
          <CardDropdown
            onCompleteRepetition={onCompleteRepetition}
            repetitionId={id}
          />
        </div>
      </div>
    </div>
  );
};
