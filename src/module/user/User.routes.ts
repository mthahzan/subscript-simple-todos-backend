import { FastifyInstance } from 'fastify';

import ResponseHelper from '../../helpers/Response';
import UserQueries from './User.queries';

const attachGetUsersRoute = (App: FastifyInstance) => {
  App.get('/users', async (request, reply) => {
    const users = await UserQueries.getAllUsers();

    return ResponseHelper.createSuccessResponse(users);
  });
};

const AttachUserRoutes = (App: FastifyInstance) => {
  attachGetUsersRoute(App);
};

export default AttachUserRoutes;
