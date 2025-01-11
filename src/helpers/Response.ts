import { TSuccessHttpResponseBody, TErrorHttpResponseBody } from '../types';

const createSuccessResponse = <T>(data: T): TSuccessHttpResponseBody<T> => ({
  success: true,
  data,
});

const createErrorResponse = (
  message: string,
  code: string,
): TErrorHttpResponseBody => ({
  success: false,
  error: {
    message,
    code,
  },
});

const ResponseHelper = {
  createSuccessResponse,
  createErrorResponse,
};

export default ResponseHelper;
