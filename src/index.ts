import UserController from './output';

UserController;

function whatIsIt<T>(arg: T): string {
  return typeof arg;
}

console.log(whatIsIt<string>('vini'))
console.log(whatIsIt<number>(1))
console.log(whatIsIt<boolean>(true))
