// Calculadora Simples: Crie uma calculadora simples que peça ao usuário dois números e uma operação (adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.
let num1,num2,resultado, operacao

num1 = Number(prompt("Digite um número: "))
num2 = Number(prompt("Digite outro número: "))
operacao = prompt("Qual operação você quer fazer: \n1 para Adição\n2 para Subtração\n3 para Divisão\n4 para Multiplicação")


if (operacao == 1){
    alert(`O resultado é ${num1+num2}.`)
}else if(operacao == 2){
    alert(`O resultado é ${num1-num2}`)
}else if(operacao == 3){
    alert(`O resultado da divisão é ${num1/num2}`)
}else if(operacao ==4){
    alert(`O resultado da multiplicação é ${num1*num2}`)
}else{
    alert(`Operação ${operacao} é inválida, por favor digite uma operação valida.`)
}