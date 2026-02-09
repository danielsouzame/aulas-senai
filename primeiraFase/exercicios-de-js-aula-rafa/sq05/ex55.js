// 5.5a// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a … coisa tem piorado. Não consegue nem saber se passou...
// Crie um algoritmo para ler duas notas no Mano Juca e calcular a média dele, coitado...
// Diga também se o malandro passou (a média no mobral dele é 7,0).
let n1, n2,media
n1 = parseFloat(prompt("Nota 1: "))
n2 = parseFloat(prompt("Nota 2: "))
media = (n1+n2)/2

if (media<7){
    alert(`Juca com a nota ${media} você reprovou`)
} else{
    alert(`Você passou com ${media} de média.`)
}
