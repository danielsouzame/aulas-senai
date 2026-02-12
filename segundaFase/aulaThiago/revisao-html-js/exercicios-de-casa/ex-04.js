// Escreva um programa que pergunte ao usuário sua idade e imprima no console se ele é maior ou menor de idade de acordo com a legislação brasileira vigente.

function verificadorIdade() {
    let idade = prompt('Digite sua idade que eu lhe dires se és maior ou menor: ')

    if(isNaN(idade)) {
        console.log("O valor informado não é válido.")
        return;
    } else if (idade > 17) {
        console.log("Você é MAIOR de idade de acordo com a legislação brasileira vigente.")
    }else{
        console.log("Você é MENOR de idade de acordo com a legislação brasileira vigente.")
    }

}

verificadorIdade()