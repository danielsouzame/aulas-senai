// Com base na lista de números, escreva um programa que imprima no console uma lista substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
// O retorno deve ser: “['Fizz', 7, 'FizzBuzz', 19, 53, 'Fizz', 'Buzz', 'FizzBuzz', 34, 'Fizz']”

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

function fizzBuzz(){
    for (let n of numeros)
        if(n % 3 === 0 && n % 5 === 0){
            const pos = numeros.indexOf(n)
            numeros.splice(pos, 1, "FizzBuzz");
        }
      
        console.log(numeros);
}

fizzBuzz();