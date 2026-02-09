// 5.9// Tendo como entrada a altura (em metros) e o gênero (1: feminino; 2: masculino) de uma pessoa, construa um programa que calcule e apresente seu peso ideal utilizando as fórmulas abaixo:

// para mulheres: (62.1 * altura) – 44.7

// para homens: (72.7 * altura) – 58
let sexo, altura
altura = parseFloat(prompt("Diagite sua altura: "))
sexo = prompt("Você é do sexo masc ou fem? ")
sexo = sexo.toLowerCase()
if (sexo == "masc" ){
    alert(`Considerando que você é homem seu peso ideal é ${72.7*altura - 58}`)
} else if (sexo == "fem"){
    alert(`Considerando que você é mulher seu peso ideal é ${65.1*altura - 44.7}`)
}else{
    alert("Você inseriu algum dado fora do padrão, por favor tente novamente.")
}