// Decisão de Compra: Peça ao usuário para inserir o preço de um item e seu saldo. Em seguida, determine se eles podem comprar o item ou não.
let preço,saldo = parseFloat()
preço = prompt("Digite o preço do item:")
saldo = prompt("Digite seu saldo:")

if (preço > saldo){
    alert('Este item é caro demais para você.')
}else{
    alert('Você consegue comprar o item.')
}