type ApiErrors = string[];

export type BaseResponse<T = unknown> = {
  success: boolean;
} & T;

export type ResponseError = BaseResponse<{
  errors: ApiErrors;
}>;

export type Response<T> = BaseResponse<{
  data: T;
}>;
