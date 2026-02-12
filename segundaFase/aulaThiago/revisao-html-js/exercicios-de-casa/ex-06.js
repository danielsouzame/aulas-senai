// ​Escreva um programa que solicite ao usuário um número e avalie se um número é par ou ímpar, imprima o resultado no console conforme exemplo: ”O número 10 é par" ou ”O número 9 é impar”.

function evenPair() {
    let num = prompt("Digite um número que eu te digo se é par ou ímpar: ");

    if (isNaN(num)){
        console.log(`${num} não é um número.`);
        return;
    }else if (num % 2 === 0){
        console.log(`O número ${num} é par.`)
    }else{
        console.log(`O número ${num} é ímpar.`)
    }

}

evenPair()