import { ResponseError, PostData } from '@/shared/types/api';

export const getBodyData = (data: PostData) => {
  if (data instanceof FormData) {
    return data;
  }

  return JSON.stringify(data);
};

export const getErrorResponse = (
  messages: string | string[]
): ResponseError => ({
  success: false,
  errors: Array.isArray(messages) ? messages : [messages],
});
