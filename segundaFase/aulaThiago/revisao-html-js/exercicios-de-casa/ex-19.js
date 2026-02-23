// Com base na lista de números, escreva um programa que imprima no console uma lista substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
// O retorno deve ser: “['Fizz', 7, 'FizzBuzz', 19, 53, 'Fizz', 'Buzz', 'FizzBuzz', 34, 'Fizz']”

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function fizzBuzz(array){
    for (let n of array)
        if(n % 3 === 0 && n % 5 === 0){
            const pos = array.indexOf(n)
            array.splice(pos, 1, "FizzBuzz");
        }else if(n % 3 === 0){
            const pos = array.indexOf(n)
            array.splice(pos, 1, "Fizz");
        }else if(n % 5 === 0){
            const pos = array.indexOf(n)
            array.splice(pos, 1, "Buzz");
        }
    return array;
}

console.log(fizzBuzz(numeros));