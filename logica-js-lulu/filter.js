const numeros = [3,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor => valor > 5)
console.log(numerosMaioresQueCinco)

const numerosPares = numeros.filter(valor => valor % 2 === 0)
console.log(numerosPares)

const numerosMenoresQueCinco = numeros.filter(valor => valor < 5)
console.log(numerosMenoresQueCinco)

const usuarios = [
    {nome:'João', idade: 32},
    {nome:'Daniel', idade:23},
    {nome:'Pedro', idade: 15}
]

const usuariosMenoresDeIdade = usuarios.filter(usuario => usuario.idade < 18)
console.log(usuariosMenoresDeIdade)