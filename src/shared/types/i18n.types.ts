import type { createFormatter, useTranslations } from "next-intl";
import type messages from "../../../messages/en.json";

export type TagColorTKey = keyof typeof messages.TagColors;
export type StudyItemStatusTKey = keyof typeof messages.StudyItemStatus;
export type RepetitionStatusTKey = keyof typeof messages.RepetitionStatus;
export type ErrorsTKey = keyof typeof messages.Errors;
export type SidebarTKey = Exclude<keyof typeof messages.Sidebar, "home">;

export type IntlFormatter = ReturnType<typeof createFormatter>;
export type TimeTranslations = ReturnType<typeof useTranslations<"Time">>;
export type Repetitions = ReturnType<typeof useTranslations<"Repetitions">>;
export type StudyItemStatusTranslations = ReturnType<
  typeof useTranslations<"StudyItemStatus">
>;
export type RepetitionStatusTranslations = ReturnType<
  typeof useTranslations<"RepetitionStatus">
>;
export type ErrorsTranslations = ReturnType<typeof useTranslations<"Errors">>;
