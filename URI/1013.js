'use stric';

const lines = prompt('Digite os valores de entrada').split('');


const [A,B,C] = lines.map(Number);

const maiorAB = (A + B + Math.abs(A - B))/2;
const maiorAB2 = (C + maiorAB + Math.abs(C-maiorAB))/2;

console.log(`${maiorAB2} eh o maior`);