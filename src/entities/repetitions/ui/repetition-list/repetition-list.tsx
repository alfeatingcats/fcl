import type { FC } from "react";
import type { RepetitionsListRow } from "../../model/shared";
import { RepetitionListRow } from "../repetition-list-row";

type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>;
};

export const RepetitionList: FC<RepetitionListProps> = ({ repetitions }) => {
  return (
    <section className="flex flex-col gap-4">
      {repetitions.map((repetitionData) => (
        <RepetitionListRow {...repetitionData} key={repetitionData.id} />
      ))}
    </section>
  );
};
