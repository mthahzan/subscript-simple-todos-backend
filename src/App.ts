import Fastify from 'fastify';

import './config';
import Environment from './config/Environment';

const startServer = async () => {
  // Create a new Fastify instance
  const App = Fastify({
    logger: true,
  });

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
