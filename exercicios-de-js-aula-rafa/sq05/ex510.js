// 5.10 Na feira da rua do Mano Juca, as maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou mais cada uma custa apenas R$0,25. Crie um programa para ler o número de maçãs que ele vai comprar e informar quanto será o total da compra.
let maca = parseInt(prompt("Digite a quantidade de maças que você deseja comprar: "))

if (maca < 12){
    alert(`Cada maça vai custar R$ 0,30 pois você esta comprando apenas ${maca}. O total será R$ ${maca*0.30}`)
}else if (maca >= 12){
    alert(`Cada maça vai custar R$ 0,25 pois você esta comprando ${maca}. O total será R$ ${maca*0.25}`)
}else {
    alert("Valor incorreto")
}