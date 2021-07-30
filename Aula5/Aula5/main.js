'use strict'

const alunos = [
    {
        nome : 'joao',
        nota : '8'
    },
    {

        nome : 'felipe',
        nota : '9'
    },
    {
        nome : 'carina',
        nota : '0'
    }
]

//Responsável por gravar dados no localstorage
//* @aparam JSON dados
//* @returns void
const gravarDados = (dados) => localStorage.setItem('dbalunos',JSON.stringify(dados))

// Responsavel por ler dados no localstorage
//* @aparam string key
//* returns json

const lerDados = (key) => JSON.parse(localStorage.getItem(key))

const limparStorage = () => localStorage.clear();

document.getElementById('gravar').addEventListener('click', () => gravarDados(alunos));
document.getElementById('ler').addEventListener('click', () => console.log(lerDados('dbalunos')));
document.getElementById('limpar').addEventListener('click', limparStorage);