// Mensagem Secreta: Peça ao usuário para digitar uma senha e, se a senha for "abracadabra", exiba uma mensagem secreta.
let senha = prompt("Digite a palavra secreta para a mensagem secreta: ")

if (senha == "abracadabra"){
    alert("A mensagem secreta é: Parabens feio!")
}else{
    alert("Palavra incorreta! Tente novamente")
}