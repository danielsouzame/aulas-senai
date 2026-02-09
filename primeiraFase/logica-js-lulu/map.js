// const numeros = [3,5,8,10]

// const valoresDobrados = numeros.map((valor) => valor*2)
// console.log(numeros)
// console.log(valoresDobrados)

const usuarios = [
    {nome:'João', idade: 32},
    {nome:'Daniel', idade:23},
    {nome:'Pedro', idade: 41}
]

const nomesUsuarios = usuarios.map(usuario => usuario.nome)
const idadeUsuarios = usuarios.map(usuario => usuario.idade)
// console.log(nomesUsuarios)

function mostrador(arrays){
    for(let array of arrays){
        console.log(array)
    }
}

mostrador(idadeUsuarios)