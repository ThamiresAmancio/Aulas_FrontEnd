'mode strict'

const links = {
    "nome": "Thamires Amâncio",
    "img": "avatar.jpg",
    "links": [
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/thamyres.amancio"
        },
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/thamyresh_amanciio/"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/thamyres-amancio-7773591b4/"
        },
        {
            "titulo": "Github",
            "url": "https://github.com/ThamiresAmancio"
        }
    ]
}


const avatar = document.getElementById('avatar');
avatar.src = links.img;


const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const facebook = links.links.length;

const instagram = links.links.length;

const linkedin = links.links.length;

const github = links.links.length;


