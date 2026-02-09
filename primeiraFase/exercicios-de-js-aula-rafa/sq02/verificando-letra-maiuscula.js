// Verificando Letra Maiúscula: Peça ao usuário para inserir uma letra e verifique se ela é maiúscula ou minúscula.
const maiuscula = "QWERTYUIOPASDFGHJKLÇZXCVBNM"
const minuscula = "qwertyuiopasdfghjklçzxcvbnm"
let letra = prompt("Digite uma letra e vou ver se ela é MAIUSCULA ou minuscula")

if (maiuscula.includes(letra)){
    alert(`${letra} é MAIUSCULA.`)
} else if(minuscula.includes(letra)){
    alert(`${letra} é minuscula.`)
}else {
    alert(`${letra} é um caracter invalido`)
}