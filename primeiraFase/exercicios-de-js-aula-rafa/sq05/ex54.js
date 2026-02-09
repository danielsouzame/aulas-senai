// 5.4 – Mano Juca palestreiro:
// Faça um algoritmo que leia o nº da palestra que ele quer participar e mostre o local e o horário que ela acontecerá.
// Palestras disponíveis:
// 1 – Animações com Scratch, laboratório 305, 19h;
// 2 – Scratch para gamers, laboratório 512, 20h;
// 3 – JavaScript para leigos, laboratório 101, 19h;
// 4 – Tópicos avançados de JavaScript, laboratório 305, 20h;
// 5 – Vida e carreira, auditório, 21h.
let palestra = Number(prompt("Digite o numero da palestra que você uqer participar:\n1 – Animações com Scratch\n2 – Scratch para gamers\n3 – JavaScript para leigos\n4 – Tópicos avançados de JavaScript\n5 – Vida e carreira"))

if(palestra == 1){
    alert(`Aqui está a data e local da palestra escolhida: 1 – Animações com Scratch, laboratório 305, 19h`)
}else if(palestra == 2){
    alert(`Aqui está a data e local da palestra escolhida: 2 – Scratch para gamers, laboratório 512, 20h`)
}else if(palestra == 3){
    alert(`Aqui está a data e local da palestra escolhida: 3 – JavaScript para leigos, laboratório 101, 19h`)
}else if(palestra == 4){
    alert(`Aqui está a data e local da palestra escolhida: 4 – Tópicos avançados de JavaScript, laboratório 305, 20h`)
}else if(palestra == 5){
    alert(`Aqui está a data e local da palestra escolhida: 5 – Vida e carreira, auditório, 21h`)
}else{
    alert(`Número ${palestra} é invalido, por favor, escolha uma das palestras disponiveis.`)
}