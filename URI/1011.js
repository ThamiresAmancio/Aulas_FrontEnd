'use stric';

const lines = prompt('Digite os valores de entrada').split('');


const R = Number(lines[0]);
const pi = 3.14159;


const volume = (4.0/3) * pi * R ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);

