'use stric';

const lines = prompt('Digite os valores de entrada').split('');


const x = Number(lines[0]);
const y = Number(lines[1]);

const media = x / y;

console.log(`${media.toFixed(3)} km/l`);