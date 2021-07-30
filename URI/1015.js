'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const[x1,y1] = lines.map(Number);

const [x2,y2]=lines.map(Number);

const distancia = Math.sqrt(((x2-x1)**2+(y2-y1)**2));

console.log(distancia.toFixed(4));