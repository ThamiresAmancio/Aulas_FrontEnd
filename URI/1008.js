'use stric';

const lines = prompt('Digite os valores de entrada').split('');


 
const[numero,horasTrabalhadas,salario] = lines.map(Number);

const funcionarioSalary = salario * horasTrabalhadas;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${funcionarioSalary.toFixed(2)}`);