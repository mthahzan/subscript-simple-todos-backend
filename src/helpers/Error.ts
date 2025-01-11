import status from 'http-status';

export class AppError extends Error {
  public readonly message: string;
  public readonly code: string;
  public readonly statusCode: number;

  constructor(
    message: string,
    code: string,
    statusCode: number = status.INTERNAL_SERVER_ERROR,
  ) {
    super(message);

    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
  }
}

const notFound = (message: string, code: string): AppError =>
  new AppError(message, code, status.NOT_FOUND);

const badRequest = (message: string, code: string): AppError =>
  new AppError(message, code, status.BAD_REQUEST);

const unauthorized = (message: string, code: string): AppError =>
  new AppError(message, code, status.UNAUTHORIZED);

const forbidden = (message: string, code: string): AppError =>
  new AppError(message, code, status.FORBIDDEN);

const internalServerError = (message: string, code: string): AppError =>
  new AppError(message, code, status.INTERNAL_SERVER_ERROR);

const ErrorHelper = {
  notFound,
  badRequest,
  unauthorized,
  forbidden,
  internalServerError,
};

export default ErrorHelper;
