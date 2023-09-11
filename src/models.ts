export enum accessOptions {
  administrator = 'administrador',
  manager = 'gerente',
  employee = 'funcionário',
  undefined = 'Não Definido'
}

class Person {
  public address?: string[]
  // Construtor
  constructor(
    public fullName: string, 
  ) {}
}

export class User extends Person {
  access?: accessOptions;
  active?: boolean;

  constructor(
    public fullName: string, 
    public register?: string | number
  ) {
    super(fullName)
  }
}