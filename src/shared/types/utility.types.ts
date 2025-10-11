export type CallbackHandlers<S = { name: string }, E = { name: string }> = {
  onSuccess: (arg0: S) => void;
  onError?: (arg0: E) => void;
};
