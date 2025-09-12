// Verificando um Ano Bissexto: Peça ao usuário para inserir um ano e determine se ele é bissexto ou não.
let ano = Number(prompt("Vamos verificar se o ano é bissexto, digite um ano: "))

if (ano.indexOf("00")[-1,-2]){
    alert("Ano Bissexto!")
}else{
    alert('Ano não Bissexto!')
}

