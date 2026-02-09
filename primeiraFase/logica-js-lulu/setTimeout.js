// setTimeout(()=>{
//     console.log("Execute depois de 3 segundos.")
// },3000)

function saudacao(){
    console.log("olá")
}

// function soma(){
//     console.log(5+2)
// }

const soma = ()=> console.log(6+9)

// setTimeout(soma=> console.log(5+2),2000)

function imprimeDado(){
    console.log("imprimir")
}

setTimeout(soma,2000)
setTimeout(imprimeDado, 5000)
saudacao()