import Dotenv from 'dotenv';
import Joi from 'joi';

// Load environment variables from .env file
Dotenv.config();

const Environment = {
  Node: {
    env: process.env.NODE_ENV,
  },
  Api: {
    host: process.env.API_HOST,
    port: Number(process.env.API_PORT),
  },
  Database: {
    url: process.env.DATABASE_URL,
  },
};

const EnvironmentSchema = Joi.object({
  Node: Joi.object({
    env: Joi.string().valid('development', 'test', 'production').required(),
  }).required(),
  Api: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
  }).required(),
  Database: Joi.object({
    url: Joi.string().required(),
  }).required(),
}).required();

const { error } = EnvironmentSchema.validate(Environment);
if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

export default Environment;
