import 'server-only';

import { Response, ResponseError } from '@/shared/types/fetch';
import { headers } from 'next/headers';
import merge from 'lodash/merge';
import { logger } from '@/lib/logger';

type RequestConfig = RequestInit & {
  /**
   * отсылать ли вместе с запросом реальные данные о клиенте
   * @default false
   */
  withClientInfo?: boolean;
};

type Config = Omit<RequestConfig, 'method' | 'body'>;
type PostData = FormData | Record<any, any>;
type GetParams = Record<string, any>;

const getBodyData = (data: PostData) => {
  return data instanceof FormData ? data : JSON.stringify(data);
};

const getErrorResponse = (messages: string | string[]): ResponseError => ({
  success: false,
  errors: Array.isArray(messages) ? messages : [messages],
});

const getClientInfo = (): RequestConfig => {
  const h = headers();
  return {
    headers: {
      'x-real-ip': h.get('x-real-ip') || '',
      'x-forwarded-for': h.get('x-forwarded-for') || ''
    },
  };
};
/**
 * мб попробовать сделать через паттерн билдер
 * @param config
 */
const getConfig = (config: RequestConfig = {}) => {
  let extendedConfig = config;

  if (config?.withClientInfo) {
    delete config.withClientInfo;
    extendedConfig = merge(extendedConfig, getClientInfo());
  }

  return extendedConfig;
};

const request = async <TResponseData>(
  uri: string,
  config?: RequestConfig
): Promise<Response<TResponseData> | ResponseError> => {
  try {
    logger.debug({
      uri,
      headers: getConfig(config).headers
    });

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URI + uri,
      getConfig(config)
    );
    return (await response.json()) as Promise<Response<TResponseData>>;
  } catch (e) {
    let message = 'Unknown Error';

    if (e instanceof Error) {
      message = e.message;
    }

    logger.error({
      uri,
      error: message
  });

    return getErrorResponse(message);
  }
};

export const post = async <TResponse>({
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

export const get = async <TResponse>({
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
