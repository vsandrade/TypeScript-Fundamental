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

interface ICar {
  nickname: string;
  color: string;
  Tyres?: number;
  speed: () => number;
  break: () => number;
}

const carBear: ICar = {
  nickname: 'The Bear',
  color: 'Black Piano',
  speed: (): number => {
    return 5;
  },
  break: (): number => {
    return 2;
  },
};

const carOrange: ICar = {
  nickname: 'The Orange',
  color: 'Orange',
  speed: (): number => {
    return 4;
  },
  break: (): number => {
    return 3;
  },
};