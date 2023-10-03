export class GenericService<T> {
  protected URL: string;

  async getList(): Promise<T[]> {
    const response: Response = await fetch(this.URL);
    const list: T[] = await response.json();
    return list;
  };
}

export class Service<T> extends GenericService<T> {
  URL: string = 'http://localhost:5011/users';
}