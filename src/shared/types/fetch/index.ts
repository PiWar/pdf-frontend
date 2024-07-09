export type ResponseErrors = string[];

export type BaseResponse<T = unknown> = {
  success: boolean;
} & T;

export type ResponseError = BaseResponse<{
  errors: ResponseErrors;
}>;

export type Response<T> = BaseResponse<{
  data: T;
}>;
