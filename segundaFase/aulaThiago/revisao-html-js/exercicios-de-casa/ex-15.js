// Com base na lista de números, escreva um programa que imprima no console os números que são ímpares.

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function nImpares(){
    const impares = [];

    for (let n of numeros)
        if(n % 2 !== 0){
            impares.push(n);
        }
    console.log(impares);
}

nImpares();