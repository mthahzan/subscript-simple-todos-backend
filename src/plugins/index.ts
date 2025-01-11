import { FastifyInstance } from 'fastify';

import ExternalPlugins from './External';
import ErrorHandlerPlugins from './ErrorHandler';

const attachPlugins = (App: FastifyInstance) => {
  ExternalPlugins.attachExternalPlugins(App);
  ErrorHandlerPlugins.attachErrorHandler(App);
};

const Plugins = { attachPlugins };

export default Plugins;
