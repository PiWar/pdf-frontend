import { BaseResponse, ResponseError } from '@/shared/types/api';

export function isResponseError<T extends BaseResponse>(
  response: ResponseError | T
): response is ResponseError {
  return !response.success;
}
