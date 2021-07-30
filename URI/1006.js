'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const [A,B,C]=lines.map(Number);

const media = (A*2 + B*3 + C*5)/10.0;
console.log(`MEDIA = ${media.toFixed(1)}`);


