// 5.8// Crie um programa que leia a idade de uma pessoa e diga se ela pode votar em uma eleição ou não. As possibilidades são:

// Menores de 16 anos: não podem votar;

// Com 16 e 17: voto facultativo;

// De 18 a 65 anos: voto obrigatório;

// Maiores de 65: voto facultativo.
let idade = parseInt(prompt("Qual sua idade?"))

if (idade >= 16 && idade < 18 || idade >= 65){
    alert(`Você tem ${idade}, e seu voto é facultativo.`)
}else if(idade < 16){
    alert(`Você não pode votar.`)
}else{
    alert("Voto obrigatorio.")
}