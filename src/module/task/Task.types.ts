import { TOptional } from '../../types';

export type TTask = {
  id: string;
  content: string;
  completed: boolean;
  user_id: TOptional<string>;
  created_at: Date;
  updated_at: Date;
};
