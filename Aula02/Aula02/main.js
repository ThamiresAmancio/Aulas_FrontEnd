"use strict"
// funções
// procedientos
// métodos
const num1 = document.getElementById('numero2');
function soma(a, b) {
return a;
 }
const total = soma (2, num1);
// -> parametros 
// -> argumentos 
// Por que usar funções
//-> Reutizar o código
// -> Evitar repetição de código
//-> Diminuir o tamanho do código
//-> facilitar a leitura
//Boas práticas
//-> Responsabilidade única (SOLID)
// -> Funções pequenas
// -> Funções puras (dado uma entrada sempre sera a mesma saida)
// -> Semantica (significado)
// -> Quantidade de paramentros (0, 1, 2, 3)
const nota1 = Number(document.getElementById('nota1').value)
const nota2 = Number(document.getElementById('nota2').value)
function calcularMedia (n1, n2) {
return (n1 + n2) / 2
 }
const media = calcularMedia (nota1, nota2)
function situacaoAluno(media){
if(media >= 5){
return "Aprovado";
 }else{
return "Reprovado";
 }
}
alert (situacaoAluno(media));
// -> Funções no javascript são "objeto de primeira classe"
// -> Funções de "alta ordem", ou seja, os famosos callback
//Função declarada/tradicional
function quadrado (numero) {
return numero * numero;
 
}
// Funções anonimas
const quadrado = function (numero) {
return numero * numero;
}
// arrow function f(x) = x * 2
const quadrado2 = (numero) => {
return numero * numero;
}
//arrow2 function 
const quadrado3 = (numero) => numero * numero
document.getElementById('container')
 .addEventListener('click', function () { alert ("Olá Mundo!")})