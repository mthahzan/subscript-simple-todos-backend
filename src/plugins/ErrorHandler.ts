import { FastifyInstance } from 'fastify';
import Status from 'http-status';

import ResponseHelper from '../helpers/Response';
import { AppError } from '../helpers/Error';

const attachErrorHandler = (App: FastifyInstance) => {
  App.setNotFoundHandler((request, reply) => {
    reply
      .code(Status.NOT_FOUND)
      .send(
        ResponseHelper.createErrorResponse(
          `${request.originalUrl} is not a valid route`,
          'route_not_found',
        ),
      );

    return reply;
  });

  App.setErrorHandler((error, request, reply) => {
    if (error instanceof AppError) {
      const { message, code, statusCode } = error;

      reply
        .code(statusCode)
        .send(ResponseHelper.createErrorResponse(message, code));
    } else {
      reply
        .code(Status.INTERNAL_SERVER_ERROR)
        .send(
          ResponseHelper.createErrorResponse(
            'Internal server error',
            'internal_server_error',
          ),
        );
    }

    return reply;
  });
};

const ErrorHandlerPlugins = {
  attachErrorHandler,
};

export default ErrorHandlerPlugins;
