import type { FC } from "react";
import type { RepetitionsListRow } from "../../model/shared";
import { RepetitionListRow } from "../list-row";

type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>;
};

export const RepetitionList: FC<RepetitionListProps> = ({ repetitions }) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repetitions.map((repetitionData) => (
        <RepetitionListRow {...repetitionData} key={repetitionData.id} />
      ))}
    </section>
  );
};
