'use stric';

const lines = prompt('Digite os valores de entrada').split('');


const nome = lines[0];
const salario = Number(lines[1]);
const montante = Number(lines[2]);


const vendedor = montante * 0.15 ;
const salarioFinal = salario + vendedor;

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);

