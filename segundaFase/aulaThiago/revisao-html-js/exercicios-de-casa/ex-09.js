// Escreva uma função que recebe dois números como argumentos e retorne sua soma, armazene o resultado em uma variável e imprima no console.

function soma () {
    let numUm = prompt("Digite um número: ");
    let numDois = prompt("Digite outro número: ");

    if(isNaN(numUm) || isNaN(numDois)){
        console.log("Você digitou um valor inválido.");
        return;
    }
    let soma = +numDois + +numUm

    console.log(`A soma dos números é ${soma}`)
}

soma()