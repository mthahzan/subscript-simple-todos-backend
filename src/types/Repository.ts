export interface IDataRepository<T> {
  create(data: T): Promise<T>;
  update(data: T): Promise<T>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
