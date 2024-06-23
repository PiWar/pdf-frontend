import { getEnv } from '@/shared/utils/env';
import { Config, ResponseError, GetParams, PostData } from '@/shared/types/api';
import { getBodyData, getErrorResponse } from '@/shared/utils/api';
import { Response } from '@/shared/types/api';

const request = async <TResponseData>(
  uri: string,
  init?: RequestInit
): Promise<Response<TResponseData> | ResponseError> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URI + uri, init);
    return (await response.json()) as Promise<Response<TResponseData>>;
  } catch (e) {
    let message = 'Unknown Error';
    if (e instanceof Error) {
      message = e.message;
    }
    return getErrorResponse(message);
  }
};

const post = async <TResponse>({
  data,
  config,
  uri,
}: {
  uri: string;
  data: PostData;
  config?: Config;
}) => {
  return await request<TResponse>(uri, {
    body: getBodyData(data),
    method: 'POST',
    ...config,
  });
};

const get = async <TResponse>({
  params,
  uri,
  config,
}: {
  uri: string;
  params?: GetParams;
  config?: Config;
}) => {
  const uriWithParams = params ? `${uri}?${new URLSearchParams(params)}` : uri;

  return await request<TResponse>(uriWithParams, config);
};

export const api = Object.freeze({
  get,
  post,
});
