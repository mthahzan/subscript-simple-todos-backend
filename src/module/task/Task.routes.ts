import { FastifyInstance } from 'fastify';

import ResponseHelper from '../../helpers/Response';
import TaskQueries from './Task.queries';
import TaskCommands from './Task.commands';
import {
  TTaskCreateRequestBody,
  TTaskCreateCommand,
  TTaskUpdateRequestParams,
  TTaskUpdateRequestBody,
  TTaskUpdateCommand,
  TTaskDeleteRequestParams,
} from './Task.types';

const attachGetTasksRoute = (App: FastifyInstance) => {
  App.get('/tasks', async (request, reply) => {
    const users = await TaskQueries.getAllTasks();

    return ResponseHelper.createSuccessResponse(users);
  });
};

const attachCreateTaskRoute = (App: FastifyInstance) => {
  App.post<{ Body: TTaskCreateRequestBody }>(
    '/tasks',
    async (request, reply) => {
      const command: TTaskCreateCommand = {
        content: request.body.content,
        completed: Boolean(request.body.completed),
        user_id: request.body.user_id,
      };

      const createdTask = await TaskCommands.createTask(command);

      return ResponseHelper.createSuccessResponse(createdTask);
    },
  );
};

const attachUpdateTaskRoute = (App: FastifyInstance) => {
  App.put<{ Body: TTaskUpdateRequestBody; Params: TTaskUpdateRequestParams }>(
    '/tasks/:id',
    async (request, reply) => {
      const command: TTaskUpdateCommand = {
        id: request.params.id,
        content: request.body.content,
        completed: Boolean(request.body.completed),
        user_id: request.body.user_id,
      };

      const updatedTask = await TaskCommands.updateTask(command);

      return ResponseHelper.createSuccessResponse(updatedTask);
    },
  );
};

const attachDeleteTaskRoute = (App: FastifyInstance) => {
  App.delete<{ Params: TTaskDeleteRequestParams }>(
    '/tasks/:id',
    async (request, reply) => {
      const command = { id: request.params.id };
      await TaskCommands.deleteTask(command);

      return ResponseHelper.createSuccessResponse(null);
    },
  );
};

const AttachTaskRoutes = (App: FastifyInstance) => {
  attachGetTasksRoute(App);
  attachCreateTaskRoute(App);
  attachUpdateTaskRoute(App);
  attachDeleteTaskRoute(App);
};

export default AttachTaskRoutes;
