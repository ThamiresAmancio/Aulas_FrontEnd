'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const [A,B,C,D] = lines.map(Number);

const diferenca = (A*B-C*D);

console.log(`DIFERENÇA = ${diferenca}`);