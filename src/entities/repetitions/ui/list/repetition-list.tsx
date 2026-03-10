import { useCallback, type FC } from "react";

import type {
  RepetitionActionType,
  RepetitionOverlayPayload,
} from "@/shared/types";

import { RepetitionListRow } from "../list-row";
import type { RepetitionListProps } from "../../model/shared";

export const RepetitionList: FC<RepetitionListProps> = ({
  repetitions,
  onCompleteRepetition,
}) => {
  const onRepetitionAction = useCallback(
    (repetitionId: RepetitionOverlayPayload) => (type: RepetitionActionType) =>
      onCompleteRepetition({ repetitionId, action: type }),
    [onCompleteRepetition],
  );

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repetitions.map((repetitionData) => (
        <RepetitionListRow
          {...repetitionData}
          key={repetitionData.id}
          onCompleteRepetition={onRepetitionAction(repetitionData.id)}
          onSkipRepetition={onRepetitionAction(repetitionData.id)}
          onWaitRepetition={onRepetitionAction(repetitionData.id)}
        />
      ))}
    </section>
  );
};
