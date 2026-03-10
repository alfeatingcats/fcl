export type CallbackHandlers<S = { name: string }, E = { name: string }> = {
  onSuccess: (arg0: S) => void;
  onError?: (arg0: E) => void;
};

export type TextContent = {
  title: string | null;
  description?: string | null;
};

export type OverlayEntityContent = {
  overlay: TextContent;
  entity: TextContent;
};
