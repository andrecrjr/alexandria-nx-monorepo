export interface CustomActionsProps<T> {
  item: T;
  actions: ActionsButtonAdmin<T>;
}

export type ActionsButtonAdmin<T> = Array<{
  label: string;
  type: string;
  linkPath?: (content: T) => string;
  action?: (content: T) => void;
}>;
