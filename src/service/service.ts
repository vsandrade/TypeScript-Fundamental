interface genericItem {
  id: number;
  name: string;
}

export class GenericService<T extends genericItem> {
  public items: T[];
  protected URL: string;

  async getItems(): Promise<T[]> {
    const response: Response = await fetch(this.URL);
    const list: T[] = await response.json();
    this.items = list;
    return list;
  };

  getItemByName(name: string): T | undefined {
    return this.items ? this.items.find((item) => (item.name = name)) : undefined
  };

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((item) => (item.id = id)) : undefined
  };
}

export class Service<T extends genericItem> extends GenericService<T> {
  URL: string = 'http://localhost:5011/users';
}