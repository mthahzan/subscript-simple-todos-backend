import TaskRepository from './Task.repository';
import { TTask } from './Task.types';

const taskRepository = new TaskRepository();

const getAllTasks = async (): Promise<TTask[]> => {
  const users = await taskRepository.getAll();

  return users;
};

const TaskQueries = { getAllTasks };

export default TaskQueries;
