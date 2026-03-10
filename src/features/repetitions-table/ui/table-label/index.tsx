import { PillIndicator } from "@/components/kibo-ui/pill";

import { useTranslations } from "next-intl";

export const TableLabel = () => {
  const t = useTranslations("Repetitions");
  return (
    <div className="flex flex-row items-center gap-2 px-2 py-0 pl-1.5">
      <PillIndicator variant={"info"} pulse={true} />-
      <span>{t("nextRepetition")}</span>
    </div>
  );
};
