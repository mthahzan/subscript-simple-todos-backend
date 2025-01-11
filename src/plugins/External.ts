import { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyFormbody from '@fastify/formbody';

const attachExternalPlugins = (App: FastifyInstance) => {
  App.register(fastifyCors);
  App.register(fastifyFormbody);
  App.register(fastifyHelmet);
};

const ExternalPlugins = {
  attachExternalPlugins,
};

export default ExternalPlugins;
