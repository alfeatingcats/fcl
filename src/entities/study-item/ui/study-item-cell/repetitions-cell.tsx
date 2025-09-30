import type { FC } from "react";

import type { StudyRepetition } from "@prisma/client";
import { RetentionMicroChart } from "@/entities/repetitions";

type RepetitionsCellProps = {
  repetitions: StudyRepetition[];
};

export const RepetitionsCell: FC<RepetitionsCellProps> = ({
  repetitions = [],
}) => {
  const redirectionDates = repetitions.map((r) => r.scheduledAt);
  return (
    <RetentionMicroChart
      repetitionDates={redirectionDates}
      currentRepetition={5}
    />
  );
};
