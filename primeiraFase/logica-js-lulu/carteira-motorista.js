const prompt = require("prompt-sync")()

const vontade = (prompt("Gostaria de fazer sua CNH? "))
const v1 = vontade.toLowerCase()
const idade = parseInt(prompt("Qual a sua idade? "))

if (v1 == "sim" ) {
    if (idade >= 18){
        console.log(`Você pode tirar sua carteira`)
    } else{
        console.log(`Você deve esperar ${18-idade} ano(s) para tirar a carteira, pois apenas maiores de 18 anos podem tirar a carteira de motorista`)
    }
}else{
    console.log("Anda de Onibus pra sempre então.")
}