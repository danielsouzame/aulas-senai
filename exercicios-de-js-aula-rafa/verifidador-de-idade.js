//Verificando a idade: Peça ao usuário sua idade e, em seguida, exiba uma mensagem que diga se ele é maior de idade ou menor de idade.
let idade
idade = Number(prompt("Digite sua idade: "))

if (idade >= 18){
    console.log(`Você é maior de idade com ${idade}` )// pode ser usado alert() tambem
}else {
    console.log(`Você é menor de idade com ${idade}`)
}