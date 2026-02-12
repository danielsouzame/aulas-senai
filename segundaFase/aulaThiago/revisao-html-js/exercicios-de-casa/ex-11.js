// Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Imprima cada propriedade no console.
// Adicione uma propriedade representando a cor do carro e imprima o objeto atualizado.
// Remova a propriedade de ano do objeto e imprima o objeto atualizado.

const carro = {
    marca: "Toyota",
    modelo: "Hilux",
    ano: "2025"    
}

for (dado in carro) {
    console.log(dado,carro[dado])
}

carro.cor = "azul"
for (dado in carro) {
    console.log(dado,carro[dado])
}

delete carro.ano
for (dado in carro) {
    console.log(dado,carro[dado])
}