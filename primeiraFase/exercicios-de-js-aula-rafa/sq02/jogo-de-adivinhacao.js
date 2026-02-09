//Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.
let jogador
jogador = Number(prompt('Tente adivinhar o numero que pensei: '))

if (jogador == 7){
    alert("Parabens! Você acertou o número.")
}else{
    alert('ERROOOOOOU!')
}
