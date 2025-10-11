import type { FC } from "react";
import type { RepetitionsListRow } from "../../model/shared";
import { RepetitionListRow } from "../list-row";
import type { OnCompleteRepetition } from "../../model/shared/types";

type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>;
  onCompleteRepetition: OnCompleteRepetition;
};

export const RepetitionList: FC<RepetitionListProps> = ({
  repetitions,
  onCompleteRepetition,
}) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repetitions.map((repetitionData) => (
        <RepetitionListRow
          {...repetitionData}
          key={repetitionData.id}
          onCompleteRepetition={onCompleteRepetition}
        />
      ))}
    </section>
  );
};
