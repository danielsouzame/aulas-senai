//5.1// Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer outra senha digitada, informar “acesso negado”.
let senha
senha = prompt("Digite a senha: ")
if (senha == 1234){
    alert("ACESSO PERMITIDO")
}else   {
    alert("ACESSO NEGADO")
}