import { TOptional } from '../../types';

export type TTask = {
  id: string;
  content: string;
  completed: TOptional<boolean>;
  user_id: TOptional<string>;
};

export type TTaskCreateCommand = Omit<TTask, 'id'>;

export type TTaskUpdateCommand = TTask;

export type TTaskDeleteCommand = {
  id: string;
};
