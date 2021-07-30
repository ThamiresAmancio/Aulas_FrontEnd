'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const [A,B] = lines.map(Number);

const media = (A*B)/12;

console.log(`${media.toFixed(3)}`);