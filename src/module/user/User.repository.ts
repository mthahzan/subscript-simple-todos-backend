import { PrismaClient } from '@prisma/client';

import { IDataRepository } from '../../types';
import { TUser } from './User.types';

export default class UserRepository implements IDataRepository<TUser> {
  _prisma: PrismaClient = new PrismaClient();

  create(data: TUser): Promise<TUser> {
    throw new Error('Method not implemented.');
  }

  update(data: TUser): Promise<TUser> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getById(id: string): Promise<TUser> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<TUser[]> {
    const results = await this._prisma.user.findMany();

    return results;
  }
}
