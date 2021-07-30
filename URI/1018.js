'use stric';

const lines = prompt('Digite os valores de entrada').split('');
const valor = parseInt(lines);

const notas = [100,50,20,10,5,2,1];

console.log(`${valor}`);

for( const nota of notas){
    const qtdNotas =parseInt(valor/nota);
    console.log(`${qtdNotas} notas(s) de R$ ${nota},00`);
    valor = valor % nota;
    
}