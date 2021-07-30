'use stric';

const lines = prompt('Digite os valores de entrada').split('');





const N = parseInt (Number(lines[0]));
const horas = (N/3600);
N = N % 3600;

const minutos = (N /60);
N=N%60;

const segundos = (N/1);
N=N%1;



console.log(`${horas}:${minutos}:${segundos} `);
