import UserRepository from './User.repository';
import { TUser } from './User.types';

const userRepository = new UserRepository();

const getAllUsers = async (): Promise<TUser[]> => {
  const users = await userRepository.getAll();

  return users;
};

const UserQueries = { getAllUsers };

export default UserQueries;
