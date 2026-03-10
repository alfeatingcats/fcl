import { useMemo, type FC } from "react";
import { useTranslations } from "next-intl";
import { Brain } from "lucide-react";

import { EventBadge } from "../badge";
import { isNil } from "es-toolkit";
import type { RepetitionBadgeVariants } from "../badge/repetition-badge";

type RepetitionDifficultyProps = {
  difficulty?: number | null;
} & RepetitionBadgeVariants;

export const RepetitionDifficulty: FC<RepetitionDifficultyProps> = ({
  difficulty,
  wVariant,
}) => {
  const t = useTranslations("Repetitions");

  const difficultyDescription = useMemo(() => {
    switch (true) {
      case isNil(difficulty):
        return t("unsetDifficulty");

      case Number(difficulty) <= 1:
        return t("veryEasy");

      case Number(difficulty) === 2:
        return t("easy");

      case Number(difficulty) === 3:
        return t("medium");

      case Number(difficulty) === 4:
        return t("difficult");

      case Number(difficulty) >= 5:
        return t("veryDifficult");

      default:
        return t("unsetDifficulty");
    }
  }, [difficulty, t]);

  return (
    <EventBadge
      label={null}
      details={difficultyDescription}
      icon={<Brain className="mr-1" />}
      wVariant={wVariant}
    />
  );
};
