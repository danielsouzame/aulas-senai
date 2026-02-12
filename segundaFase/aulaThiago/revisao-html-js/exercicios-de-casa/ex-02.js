// Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números no console, exemplo:
// A = 10; B = 5;
// “A + B = 15”
// “A - B = 5”
// “A * B = 50”
// “A / B = 2”


function basicMath () {
    let numeroUm = prompt('Digite um numero: ');
    let numeroDois = prompt('Digite o segundo numero: ');

    if(isNaN(numeroUm) || isNaN(numeroDois)) {
        console.log("Um dos valores informados não é um número válido.")
        return;
    }

    console.log(`A soma de ${numeroUm} + ${numeroDois} = ${numeroUm + numeroDois}`)
    console.log(`A subtração de ${numeroUm} - ${numeroDois} = ${numeroUm - numeroDois}`)
    console.log(`A multiplicação de ${numeroUm} x ${numeroDois} = ${numeroUm * numeroDois}`)
    console.log(`A divisão de ${numeroUm} / ${numeroDois} = ${numeroUm / numeroDois}`)
}

basicMath()
