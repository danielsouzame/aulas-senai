const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final de 0 a 10: "))
const freq = parseInt(prompt("Como está sua frequencia de 0 a 100: "))

if (notaFinal >= 7 && freq >= 75) {
    console.log(`APROVADO! Com nota ${notaFinal} e frequencia ${freq}`)
} else if(notaFinal < 7 && freq <75){
    console.log(`REPROVADO! Nota ${notaFinal} baixa e frequencia ${freq} baixa`)
} else{ 
    if (notaFinal < 7){
        console.log(`REPROVADO! Por nota baixa: ${notaFinal}.`)
    } else if (freq < 75) {
       console.log(`REPROVADO! Por frequencia baixa ${freq}`)
    }
}