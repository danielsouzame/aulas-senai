let produto,moeda1,moeda50,moeda25,moeda10,moeda05,totalPorco
function verificar() {
    produto = document.getElementById('produto').value
    moeda1 = document.getElementById('moedas1').value
    moeda50 = document.getElementById('moedas50').value
    moeda25 = document.getElementById('moedas25').value
    moeda10 = document.getElementById('moedas10').value
    moeda05 = document.getElementById('moedas5').value
    totalPorco = moeda1+moeda50+moeda25+moeda10+moeda05

    alert(`p ${produto} 1${moeda1} 50${moeda50} 25${moeda25} 10${moeda10} 05${moeda05}`)
}