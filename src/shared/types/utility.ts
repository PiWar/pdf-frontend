export type Nullable<T> = T | null;

export type GetRecordValue<
  T extends Record<string, unknown>,
  Key extends keyof T,
> = T[Key];
