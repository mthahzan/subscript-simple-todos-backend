export type TSuccessHttpResponseBody<T> = {
  success: true;
  data: T;
};

export type TErrorHttpResponseBody = {
  success: false;
  error: {
    message: string;
    code: string;
  };
};
