import { PrismaClient } from '@prisma/client';

import { IDataRepository } from '../../types';
import { TTask } from './Task.types';

export default class TaskRepository implements IDataRepository<TTask> {
  _prisma: PrismaClient = new PrismaClient();

  async create(data: TTask): Promise<TTask> {
    const result = await this._prisma.task.create({
      data: {
        content: data.content,
        completed: Boolean(data.completed),
        user_id: data.user_id,
      },
    });

    return result;
  }

  async update(data: TTask): Promise<TTask> {
    const result = await this._prisma.task.update({
      where: { id: data.id },
      data: {
        content: data.content,
        completed: Boolean(data.completed),
        user_id: data.user_id,
      },
    });

    return result;
  }

  async delete(id: string): Promise<void> {
    await this._prisma.task.delete({
      where: { id },
    });
  }

  getById(id: string): Promise<TTask> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<TTask[]> {
    const results = this._prisma.task.findMany();

    return results;
  }
}
