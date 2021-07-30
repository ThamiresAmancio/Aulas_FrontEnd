// 'use strict'

// const mostrarDados = (data) => {

//     const resultado = document.getElementById('resultado')
//         resultado.innerHTML = `

//             <p>Cidade => ${data.localidade} </p>
//             <p>Estado => ${data.uf}</p>
        
//         `


// }
// const getAPI = () =>{
//     const url = "http://viacep.com.br/ws/01001000/json/"

//     fetch(url).then(response => response.json())
//         .then(data =>mostrarDados(data))


//     //then que serve para qualquer 
//     // fetch retorna uma promise(promessa)
// }
// document.getElementById('consumir').addEventListener('click',getAPI)


'use strict'

// "cep": "01001-000",
// "logradouro": "Praça da Sé",
// "complemento": "lado ímpar",
// "bairro": "Sé",
// "localidade": "São Paulo",
// "uf": "SP",
// "ibge": "3550308",
// "gia": "1004",
// "ddd": "11",
// "siafi": "7107"

const mostrarDados = (data) => {
    const resultado = document.getElementById('resultado')
    
    resultado.innerHTML = `
        <table border="1">
            <tr>
                <th>logradouro</th>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
            <tr>
                <td>${data.logradouro}</td>
                <td>${data.localidade}</td>
                <td>${data.uf}</td>
            </tr>
        </table>
    `
}


const getAPI = () => {
    
    const cep = "06365-080"
    const url = `https://viacep.com.br/ws/${cep}/json/`

    
    fetch(url).then(response => response.json())
        .then(data => mostrarDados(data))
    
}

document.getElementById('consumir')
    .addEventListener('click', getAPI)