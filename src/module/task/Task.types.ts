import { TOptional } from '../../types';

export type TTask = {
  id: string;
  content: string;
  completed: TOptional<boolean>;
  user_id: TOptional<string>;
};

export type TTaskCreateRequestBody = Omit<TTask, 'id'>;
export type TTaskCreateCommand = Omit<TTask, 'id'>;

export type TTaskUpdateRequestParams = { id: string };
export type TTaskUpdateRequestBody = TTask;
export type TTaskUpdateCommand = TTask;

export type TTaskDeleteRequestParams = { id: string };
export type TTaskDeleteCommand = {
  id: string;
};
