import Fastify, { FastifyListenOptions } from 'fastify';

import './config';
import Environment from './config/Environment';
import Plugins from './plugins';
import UserModule from './module/user';
import TaskModule from './module/task';

const options: FastifyListenOptions = {
  host: Environment.Api.host,
  port: Environment.Api.port,
};

const startServer = async () => {
  // Create a new Fastify instance
  const App = Fastify({ logger: true });

  // Attach plugins to the Fastify instance
  Plugins.attachPlugins(App);

  // Attach the routes
  UserModule.attachUserRoutes(App);
  TaskModule.attachTaskRoutes(App);

  // Declare a route
  App.get('/', async function handler(request, reply) {
    return { hello: 'world' };
  });

  // Run the server!
  try {
    await App.listen(options);
  } catch (err) {
    App.log.error(err);
    process.exit(1);
  }
};

startServer();
