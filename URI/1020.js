'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const dia = parseInt(Number(lines[0]));
const ano = 365;
const mes = 30;
const dias = 1;
const ano = parseInt(dia/365);
dia = dia % ano;

const mes = parseInt(dia/30);
dia = dia % mes;


const qtdDias = parseInt(dia/1);
dia=dia % ano;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${qtdDias} dias(s)`);