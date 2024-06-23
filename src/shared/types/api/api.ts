export type Config = Omit<RequestInit, 'method' | 'body'>;
export type PostData = FormData | Record<any, any>;
export type GetParams = Record<string, any>;
