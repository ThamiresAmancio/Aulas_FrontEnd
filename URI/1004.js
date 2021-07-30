'use stric';

const lines = prompt('Digite os valores de entrada').split('');

lines.pop();
const multiplica = (numero1, numero2) => numero1 * numero2;

const produto = lines.map(Number).reduce(multiplica);

console.log (`PROD = ${produto}`);