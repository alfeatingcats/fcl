import {
  CheckCheck,
  EllipsisVertical,
  ExternalLink,
  TimerReset,
  UndoDot,
} from "lucide-react";
import type { FC } from "react";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { RepetitionActionType } from "@/shared/types";
import type { RepetitionStatus } from "@prisma/client";

type RepetitionActionDropdownProps = {
  onCompleteRepetition: (type: RepetitionActionType) => void;
  onSkipRepetition: (type: RepetitionActionType) => void;
  onWaitRepetition: (type: RepetitionActionType) => void;
  status: RepetitionStatus;
};

export const RepetitionActionDropdown: FC<RepetitionActionDropdownProps> = ({
  onCompleteRepetition,
  onSkipRepetition,
  onWaitRepetition,
  status,
}) => {
  const t = useTranslations("Repetitions");
  const ts = useTranslations("StudyItem");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="xxs" className="">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>{t("repetition")}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled={status === "COMPLETED"}
            onClick={() => onCompleteRepetition("complete")}
          >
            <CheckCheck />
            {t("completeButton")}
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={status === "SKIPPED"}
            onClick={() => onSkipRepetition("skip")}
          >
            <UndoDot className="scale-x-[-1]" /> {t("skipButton")}
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={status === "PENDING"}
            onClick={() => onWaitRepetition("wait")}
          >
            <TimerReset className="scale-x-[-1]" /> {t("waitButton")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            <ExternalLink />
            {ts("getByIdTitle")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
