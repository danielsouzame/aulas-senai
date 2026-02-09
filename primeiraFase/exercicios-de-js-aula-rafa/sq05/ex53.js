// 5.3 – Mano Juca enfrenta o rodízio de carros de São Paulo;
// Faça um algoritmo que leia o último número da placa do carro e mostre o dia em que ele não pode rodar pela cidade de São Paulo.
// Final 0 ou 1: não pode rodar na segunda-feira;
// Final 2 ou 3: não pode rodar na terça-feira;
// Final 4 ou 5: não pode rodar na quarta-feira;
// Final 6 ou 7: não pode rodar na quinta-feira;
// Final 8 ou 9: não pode rodar na sexta-feira.
let placa = Number(prompt("Digite o ultimo digito de sua placa"))

if (placa == 0 || placa == 1){
    alert(`Placa com final ${placa} não pode rodar na segunda-feira`)
}else if (placa == 2 || placa == 3){
    alert(`placa com final ${placa} não pode rodar na terça-feira`)
}else if (placa == 4 || placa == 5){
    alert(`Placa com final ${placa} não pode rodar na quarta-feira`)
}else if (placa == 6 || placa == 7){
    alert(`Placa com final ${placa} não pode rodar na quinta-feira`)
}else if (placa == 8 || placa == 9){
    alert(`Placa com final ${placa} não pode rodar na sexta-feira`)
}else{
    alert(`${placa} é um numero invalido, por favor, digite apenas o ultimo digito da sua placa`)
}