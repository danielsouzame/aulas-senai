//5.2// Mano Juca bateu a cabeça e está com problemas de raciocínio...
// Está analisando dois números há horas e não consegue descobrir qual deles é o maior. Vamos ajuda-lo!
//Crie um algoritmo que leia dois números A e B e imprima o maior deles.
let num1,num2
num1 = Number(prompt("JUCA, digite um numero: "))
num2 = Number(prompt("Agora digita outro:"))

if(num1>num2){
    alert(`O número ${num1} é maior que ${num2}`)
}else if(num1<num2){
    alert(`O número ${num2} é maior que ${num1}`)
}else{
    alert(`Os números que você são iguais`)
}