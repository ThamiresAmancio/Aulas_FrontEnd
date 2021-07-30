'use strict'

const aleatorioSincrono = () =>{

    console.log('Gerando um número de form Sícrona')
    return ((Math.random() * 10).toFixed(0))
}

const aleatorioAssincrono = () =>{

    setTimeout(()=>{
        console.log('Gerando um número de forma Assíncrona')
    return ((Math.random() * 10).toFixed(0))
    },3000)
}


const aleatorioPromise = () => {
    return new Promise ((resolve,reject) => resolve(Math.random() * 10),toFixed(0))
}

let numero;

const mensagem = async() =>{
    console.log("-------Início do Teste -------")

    const numero = await aleatorioPromise ()
    const soma  = +numero + 100

    console.log(`numero : ${numero}`)
    console.log(`soma :${soma}`)
    console.log("------------Fim de Teste ----------------")
}


const buscaCep = async () =>{
    const data = fetch("https://viacep.com.br/ws/01001000/json/")
    const json = await (await data).json()
    console.log(json)
}

document.getElementById('teste').addEventListener('click',mensagem)