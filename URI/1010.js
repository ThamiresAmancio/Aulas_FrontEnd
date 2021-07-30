'use stric';

const lines = prompt('Digite os valores de entrada').split('');




const idPeca1 = lines[0];
const qtdPeca1 = Number(lines[1]);
const valorUnitario1 = Number(lines[2]);

const  idPeca2 = lines[3];
const qtdPeca2 = Number(lines[4]);
const valorUnitario2 = Number(lines[5]);

const valorTotalPeca1 = qtdPeca1 * valorUnitario1;
const valorTotalPeca2 = qtdPeca2 * valorUnitario2;

console.log("VALOR A PAGAR: R$" + valorFinalPagar.toFixed(2));