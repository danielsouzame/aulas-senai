let produto,moeda1,moeda50,moeda25,moeda10,moeda05,totalPorco,resto
function verificar() {

    const inputs = document.getElementsByName('caixa')
    let valido = true

    inputs.forEach(input => {
        const produtoInput = document.getElementById('produto')
        const valorProduto = produtoInput.value 

        //verifica valor do Produto
        if (valorProduto == '' || Number(valorProduto) <= 0){
            valido = false
            produtoInput.style.border = '2px solid red'
        }else {
            produtoInput.style.border = '2px solid black'
        }

        //verifica quantidade de moedas
        if (input.value === '' || input.value < 0){
            valido = false
            input.style.border = '2px solid red'
        }else {
            input.style.border = '2px solid black'
        }
    })

    if (!valido){
        alert('Por favor, preencha todos os campos corretamente!')
        return
    }

    produto = Number(document.getElementById('produto').value)
    moeda1 = parseInt(document.getElementById('moedas1').value)
    moeda50 = parseInt(document.getElementById('moedas50').value)
    moeda25 = parseInt(document.getElementById('moedas25').value)
    moeda10 = parseInt(document.getElementById('moedas10').value)
    moeda05 = parseInt(document.getElementById('moedas5').value)
    totalPorco = moeda1 + moeda50*0.50 + moeda25*0.25 + moeda10*0.10 + moeda05*0.05
    resto = produto - totalPorco

    if (produto > totalPorco){
        document.getElementById('resultado').innerHTML = `O produto custa R$ ${produto.toFixed(2)} e você só tem R$ ${totalPorco.toFixed(2)}, você precisa economizar mais R$ ${resto.toFixed(2)}`
        document.getElementById('resultado').style.fontSize = '20px'
    } else if (produto < totalPorco){
        // resto = resto - 2*resto
        resto = totalPorco - produto
        document.getElementById('resultado').innerHTML = `Você tem R$ ${totalPorco.toFixed(2)}. Consegue comprar o produto de R$ ${produto.toFixed(2)} e ainda lhe restam R$ ${resto.toFixed(2)}`
        document.getElementById('resultado').style.fontSize = '20px'
    } else {
        document.getElementById('resultado').innerHTML = `Você tem R$ ${totalPorco.toFixed(2)}. Consegue comprar o produto de R$ ${produto.toFixed(2)} usando todas as suas economias`
        document.getElementById('resultado').style.fontSize = '20px'
    }
// alert(`produto ${produto} moeda 1 ${moeda1} moeda 50 ${moeda50} moeda 25 ${moeda25} moeda 10 ${moeda10} moeda 05 ${moeda05} total ${totalPorco}`)

}
