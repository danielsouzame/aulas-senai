// Calculadora de IMC: Crie uma calculadora de Índice de Massa Corporal (IMC) que peça ao usuário seu peso e altura e, em seguida, calcule e exiba o IMC. Informe também em que faixa o usuário se encontra.
let peso,altura,imc

alert("Vamos calcular seu IMC!")
peso = parseFloat(prompt("Digite seu peso:"))
altura =parseFloat(prompt("Digite sua altura:"))
imc = peso/(altura*altura)

if (imc<18.5){
    alert(`Seu IMC é ${imc}. Você está Abaixo do peso ideal`) 
}else if (imc<24.99){
    alert(`Seu IMC é ${imc}. Você está no peso ideal`)
}else if (imc<29.99){
    alert(`Seu IMC é ${imc}. Você está com sobrepeso`)
}else{
    alert(`Seu IMC é ${imc}. Você está com Obesidade`)
}