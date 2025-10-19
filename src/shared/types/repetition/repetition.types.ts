/**
 * Payload for repetition overlay
 * null = overlay closed, string = active repetition ID
 */
export type RepetitionOverlayPayload = string | null;

/**
 * User action types for repetition (matches tRPC endpoints)
 */
export type RepetitionActionType = "complete" | "skip" | "wait";

/**
 * Current action state for optimistic updates/loading states
 */
export type RepetitionActionState = {
  repetitionId: string | null;
  action: RepetitionActionType | null;
};

/**
 * Callback for handling repetition overlay actions
 */
export type RepetitionOverlayCallback = (
  payload: RepetitionOverlayPayload,
) => void;
