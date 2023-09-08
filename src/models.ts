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
  readonly nickname: string;
  color: string;
  tires?: number;
  speedValue: number;
  breakValue?: number;
  speed(numero1: number): number;
  break(numero2: number): number;
}

const carBear: ICar = {
  nickname: 'The Bear',
  color: 'Black Piano',
  speedValue: 5,
  speed(a: number): number {
    return this.speedValue;
  },
  break(b: number): number {
    return 2;
  },
};

// Eu não posso fazer isso da linha abaixo, porque a propriedade é Read Only. 
// ou somente leitura.
// carBear.nickname = 'The Lion'
console.log(carBear.nickname)

const carOrange: ICar = {
  nickname: 'The Orange',
  color: 'Orange',
  speedValue: 4,
  breakValue: 3,
  speed(): number {
    return this.speedValue;
  },
  break: function (): number {
    return this.breakValue;
  },
};

console.log(carOrange.nickname)
console.log(carOrange.speed(1))
console.log(carOrange.break(1))