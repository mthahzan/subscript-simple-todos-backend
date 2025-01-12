import ErrorHelper from '../../helpers/Error';

export enum ETaskErrorCode {
  CreateCommandValidationError = 'task_create_command_validation_error',
  UpdateCommandValidationError = 'task_update_command_validation_error',
  DeteleCommandValidationError = 'task_delete_command_validation_error',
}

const createTaskCommandValidationError = (message: string) =>
  ErrorHelper.badRequest(message, ETaskErrorCode.CreateCommandValidationError);

const updateTaskCommandValidationError = (message: string) =>
  ErrorHelper.badRequest(message, ETaskErrorCode.UpdateCommandValidationError);

const deleteTaskCommandValidationError = (message: string) =>
  ErrorHelper.badRequest(message, ETaskErrorCode.DeteleCommandValidationError);

const TaskErrors = {
  createTaskCommandValidationError,
  updateTaskCommandValidationError,
  deleteTaskCommandValidationError,
};

export default TaskErrors;
