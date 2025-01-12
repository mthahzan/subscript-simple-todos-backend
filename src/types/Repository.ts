export interface IDataRepository<T> {
  create(data: Omit<T, 'id'>): Promise<T>;
  update(data: T): Promise<T>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
