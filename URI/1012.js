'use stric';

const lines = prompt('Digite os valores de entrada').split('');

const [A,B,C] = input.split("").map(item=>parseFloat(item));
const pi = 3.14159;

const triangulo = (A * C)/2;
const circulo = pi * Math.pow(C,2);
const trapezio = (( A+B)*C)/2.0;
const quadrado = B * B ;
const retangulo = A * B;

console.log(`TRIANGULO : ${triangulo.toFixed(3)}`);
console.log(`CIRCULO : ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO : ${trapezio.toFixed(3)}`);
console.log(`QUADRADO : ${quadrado.toFixed(3)}`);
console.log(`RETANGULO : ${retangulo.toFixed(3)}`);





