// Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário. Exemplo: Informado o número 5:
// ”5 x 1 = 5”
// ”5 x 2 = 10”
// …
// ”5 x 9 = 45”
// ”5 x 10 = 50”

function tabuada(){
    let num = prompt("Digite o número para ter a tabuada.");
    
    if(isNaN(num)){
        console.log("por favor, digite apenas números.");
        return;
    }

    for(let i = 1; i < 11; i++){
        console.log(`${num} x ${i} = ${i*num}`);
    }
}

tabuada()