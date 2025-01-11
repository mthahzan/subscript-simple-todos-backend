import Fastify, { FastifyListenOptions } from 'fastify';

import './config';
import Environment from './config/Environment';
import Plugins from './plugins';

const startServer = async () => {
  // Create a new Fastify instance
  const App = Fastify({ logger: true });

  // Attach plugins to the Fastify instance
  Plugins.attachPlugins(App);

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
