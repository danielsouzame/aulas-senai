// Comparação de Números: Peça ao usuário para inserir dois números e determine qual deles é maior.
let num1,num2

num1 = Number(prompt('Digite um numero: '))
num2 = Number(prompt('Digite outro numero:'))

if (num1 > num2){
    alert(`O numero ${num1} é maior que ${num2}`)
}else if(num1 == num2){
    alert(`Os numeros ${num1} e ${num2} são iguais`)
}else{
    alert(`O número ${num1} é menor do que ${num2}`)
}