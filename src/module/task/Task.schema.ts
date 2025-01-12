import Joi from 'joi';

export const TaskCreateCommandSchema = Joi.object({
  content: Joi.string().required(),
  completed: Joi.boolean().optional(),
  user_id: Joi.string().optional(),
});

export const TaskUpdateCommandSchema = Joi.object({
  id: Joi.string().required(),
  content: Joi.string().required(),
  completed: Joi.boolean().optional(),
  user_id: Joi.string().optional(),
});

export const TaskDeleteCommandSchema = Joi.object({
  id: Joi.string().required(),
});
