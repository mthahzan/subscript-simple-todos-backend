import Fastify, { FastifyListenOptions } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyFormbody from '@fastify/formbody';
import Status from 'http-status';

import './config';
import Environment from './config/Environment';
import ResponseHelper from './helpers/Response';
import { AppError } from './helpers/Error';

const startServer = async () => {
  // Create a new Fastify instance
  const App = Fastify({ logger: true });

  // Register fastify-formbody plugin
  App.register(fastifyCors);
  App.register(fastifyFormbody);
  App.register(fastifyHelmet);

  // Register error handler
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

  // Declare a route
  App.get('/', async function handler(request, reply) {
    return { hello: 'world' };
  });

  // Run the server!
  try {
    const options: FastifyListenOptions = {
      host: Environment.Api.host,
      port: Environment.Api.port,
    };

    await App.listen(options);
  } catch (err) {
    App.log.error(err);
    process.exit(1);
  }
};

startServer();
