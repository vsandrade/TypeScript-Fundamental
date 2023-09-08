export enum accessOptions {
  administrator = 'administrador',
  manager = 'gerente',
  employee = 'funcionário',
  undefined = 'Não Definido'
}

/// Using Type ------- ⬇️ ⬇️ ⬇️ ⬇️

export type PersonType = {
  address: string[];
  addPerson(): void;
}

export type userType = PersonType & {
  fullName: string,
  register?: string | number,
  access?: accessOptions,
  active?: boolean
}

const TUser: userType = {
  fullName: '',
  address: [],
  addPerson(): void {}
}

/// Using Interface ------- ⬇️ ⬇️ ⬇️ ⬇️

interface IPerson {
  fullName: string;
  address: string[];
  addPerson(): void;
}

interface IUser extends IPerson {
  register?: string | number;
  access: accessOptions;
  active: boolean;
}

const user: IUser = {
  fullName: '',
  address: [],
  access: accessOptions.employee,
  active: true,
  addPerson(): void {}
}