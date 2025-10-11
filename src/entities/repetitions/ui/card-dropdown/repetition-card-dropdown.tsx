import {
  CheckCheck,
  EllipsisVertical,
  ExternalLink,
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
import type { OnCompleteRepetition } from "../../model";

type RepetitionActionDropdownProps = {
  repetitionId: string;
  onCompleteRepetition: OnCompleteRepetition;
};

export const RepetitionActionDropdown: FC<RepetitionActionDropdownProps> = ({
  repetitionId,
  onCompleteRepetition,
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
          <DropdownMenuItem onClick={() => onCompleteRepetition(repetitionId)}>
            <CheckCheck />
            {t("completeButton")}
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <UndoDot className="scale-x-[-1]" /> {t("skipButton")}
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
