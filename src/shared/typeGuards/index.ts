export * from './isResponseError';

// default type guards

export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined;
}

export function isNotNil<T>(value: T): value is Exclude<T, undefined | null> {
  return value !== undefined && value !== null;
}
