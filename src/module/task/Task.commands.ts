import TaskRepository from './Task.repository';
import TaskErrors from './Task.errors';
import {
  TaskCreateCommandSchema,
  TaskUpdateCommandSchema,
  TaskDeleteCommandSchema,
} from './Task.schema';
import {
  TTask,
  TTaskCreateCommand,
  TTaskUpdateCommand,
  TTaskDeleteCommand,
} from './Task.types';

const taskRepository = new TaskRepository();

const createTask = async (command: TTaskCreateCommand): Promise<TTask> => {
  // Validate the command
  const { error } = TaskCreateCommandSchema.validate(command);
  if (error) {
    throw TaskErrors.createTaskCommandValidationError(error.message);
  }

  // Create the task
  const taskValues: Omit<TTask, 'id'> = {
    content: command.content,
    completed: Boolean(command.completed),
    user_id: command.user_id,
  };
  const task = await taskRepository.create(taskValues);

  return task;
};

const updateTask = async (command: TTaskUpdateCommand): Promise<TTask> => {
  // Validate the command
  const { error } = TaskUpdateCommandSchema.validate(command);
  if (error) {
    throw TaskErrors.updateTaskCommandValidationError(error.message);
  }

  // Update the task
  const task = await taskRepository.update(command);

  return task;
};

const deleteTask = async (command: TTaskDeleteCommand): Promise<void> => {
  // Validate the command
  const { error } = TaskDeleteCommandSchema.validate(command);
  if (error) {
    throw TaskErrors.deleteTaskCommandValidationError(error.message);
  }

  // Delete the task
  await taskRepository.delete(command.id);
};

const TaskQueries = { createTask, updateTask, deleteTask };

export default TaskQueries;
