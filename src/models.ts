export enum accessOptions {
  administrator = 'administrador',
  manager = 'gerente',
  employee = 'funcionário',
  undefined = 'Não Definido'
}

export type userType = {
  fullName: string,
  register?: string | number,
  access?: accessOptions,
  active?: boolean
}

export interface IPerson {
  fullName: string,
  register?: string | number,
  access?: accessOptions,
  active?: boolean,
  addPerson(): void;
}



export interface IUser extends IPerson {
  addressHome: string,
  addressWork: string
}

const user: IUser = {
  fullName: 'Vini',
  addressHome: '29 Casa',
  addressWork: '25 Trabalho',
  addPerson(): void {
    
  }
}