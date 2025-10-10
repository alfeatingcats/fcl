// Common utility and generic types used across the project

import type { UseFormReturn } from "react-hook-form";
import type useEmblaCarousel from "embla-carousel-react";
import type { StorageValue } from "zustand/middleware/persist";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type { createFormatter, useTranslations } from "next-intl";
import type { UserStoreState } from "@/shared/stores/timezone-store";

import type messages from "../../../messages/en.json";

// Storage value for Zustand persist
export type PersistedUserStoreState = StorageValue<Partial<UserStoreState>>;

// Formatter type for next-intl
export type TagColorTKey = keyof typeof messages.TagColors;
export type StudyItemStatusTKey = keyof typeof messages.StudyItemStatus;
export type RepetitionStatusTKey = keyof typeof messages.RepetitionStatus;
export type ErrorsTKey = keyof typeof messages.Errors;

export type SidebarTKey = Exclude<keyof typeof messages.Sidebar, "home">;

export type IntlFormatter = ReturnType<typeof createFormatter>;
export type TimeTranslations = ReturnType<typeof useTranslations<"Time">>;
export type StudyItemStatusTranslations = ReturnType<
  typeof useTranslations<"StudyItemStatus">
>;
export type RepetitionStatusTranslations = ReturnType<
  typeof useTranslations<"RepetitionStatus">
>;
export type ErrorsTranslations = ReturnType<typeof useTranslations<"Errors">>;

// Embla Carousel types
export type EmblaCarouselApi = UseEmblaCarouselType[1];
export type EmblaCarouselOptions = Parameters<typeof useEmblaCarousel>[0];
export type EmblaCarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

// React Hook Form handleSubmit type
export type FormHandleSubmit<T extends object = object> = ReturnType<
  UseFormReturn<T>["handleSubmit"]
>;

// Generic callback handlers type
export type CallbackHandlers<S = { name: string }, E = { name: string }> = {
  onSuccess: (arg0: S) => void;
  onError: (arg0: E) => void;
};
