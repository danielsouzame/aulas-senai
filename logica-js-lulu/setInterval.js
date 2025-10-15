// setInterval(()=>{
//     console.log("executei")
// },2000)

const prompt = require('prompt-sync')()

let contadorInicial = Number(prompt("Digite um valor inicial: "))
let contadorFinal = Number(prompt("Digite o valor final: "))

let interval = setInterval(()=>{
    console.log(contadorInicial)
    contadorInicial++
    if (contadorInicial > contadorFinal){
        clearInterval(interval)
    }
},500)