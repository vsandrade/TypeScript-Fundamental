interface genericItem {
  fullName: string;
  register?: string | number;
}

export interface IService<T> {
  items: T[];
  getItems: () => Promise<T[]>;
}

export class GenericService<T> implements IService<T>{
  public items: T[];
  protected URL: string;

  async getItems(): Promise<T[]> {
    const response: Response = await fetch(this.URL);
    const list: T[] = await response.json();
    this.items = list;
    return list;
  };
}

export class UserService<T extends genericItem> extends GenericService<T> {
  URL: string = 'http://localhost:5011/users';

  getItemByName(name: string): T | undefined {
    return this.items ? this.items.find((item) => (item.fullName = name)) : undefined
  };

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((item) => (item.register = id)) : undefined
  };
}