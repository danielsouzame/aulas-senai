// Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
// ”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
// Exemplo de resultado: “A string ‘aplicativos’ é grande.”

function stringSize() {
    let string = prompt("Digite uma palvra:");

    if (!isNaN(string)){
        console.log('você digitou um número.');
        return;
    }else if(string.length < 6) {
        console.log(`A string ${string} é pequena.`)
    }else if(string.length < 11){
        console.log(`A string ${string} é média.`)
    }else{
        console.log(`A string ${string} é grande.`)
    }

}

stringSize()