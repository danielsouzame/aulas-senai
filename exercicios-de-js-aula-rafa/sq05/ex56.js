// 5.6// Mano Juca tá se aventurando em um novo gamezinho no celular dele.
// Ele tá se divertindo, mas não tem a menor ideia se tá mandando bem ou não.
// Crie um algoritmo que leia a pontuação que ele fez e diga como ele se saiu, sendo:
// “Deu ruim”, se pontuação <= 10
// “Tá… (Acrescente aqui uma frase motivacional)”, se pontuação > 10 e pontuação <= 100
// “Supimpa!”, se pontuação > 100 e pontuação <= 200
// “MITOU!”, se pontuação > 200
let pontos = parseInt(prompt("Digite sua pontuação:"))

if (pontos<= 10){
    alert("Deu ruim")
}else if(pontos > 10 && pontos <= 100){
    alert("Tá... Keep going, you can do it mate.")
}else if(pontos > 100 && pontos <= 200){
    alert("Supimpa!")
}else if(pontos > 200){
    alert("MITOU!")
}else{
    alert("pontuação digitada não é valida, tente novamente.")
}