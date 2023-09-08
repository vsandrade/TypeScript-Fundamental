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

export interface ISpearker extends IPerson {
  eventAsSpeaker: string[];
  description: string;
  linkedInURL: string;
}

export interface IParticipant extends IUser, IPerson {
  eventAsParticipant: string[];
}

const user: IParticipant = {
  fullName: 'Vini',
  eventAsParticipant: ['Angular', 'Typescript', 'React'],
  access: accessOptions.employee,
  active: true,
  address: ['29 Casa', '25 Trabalho'],
  addPerson(): void {},
};