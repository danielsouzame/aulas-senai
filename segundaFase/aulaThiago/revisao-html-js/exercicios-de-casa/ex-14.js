// Com base na lista de números, escreva um programa que imprima no console os números que são maiores que 20.

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function maiorQueVinte(array){
    const maiores = [];

    for (let n of array)
        if(n > 20){
            maiores.push(n);
        }
    return maiores;
}

console.log(maiorQueVinte(numeros));