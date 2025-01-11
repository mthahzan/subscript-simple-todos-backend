import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyFormbody from '@fastify/formbody';

import './config';
import Environment from './config/Environment';

const startServer = async () => {
  // Create a new Fastify instance
  const App = Fastify({ logger: true });

  // Register fastify-formbody plugin
  App.register(fastifyCors);
  App.register(fastifyFormbody);
  App.register(fastifyHelmet);

  // Declare a route
  App.get('/', async function handler(request, reply) {
    return { hello: 'world' };
  });

  // Run the server!
  try {
    await App.listen({ port: Environment.Api.port });
  } catch (err) {
    App.log.error(err);
    process.exit(1);
  }
};

startServer();
