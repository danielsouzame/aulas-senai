// Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.
let num

num = Number(prompt("Digite um número para vermos se é par ou não: "))

if (num % 2 == 0){
    alert("Número par!")
}else{
    alert('Número ímpar!')
}
