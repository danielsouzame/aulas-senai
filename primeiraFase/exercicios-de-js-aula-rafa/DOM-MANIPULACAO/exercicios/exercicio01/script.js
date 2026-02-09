let km,litros,consumo

function cadastrar(){
    km = Number(document.getElementById("km").value)
    litros = Number(document.getElementById("litros").value)
    consumo = km/litros
    let inputs = document.querySelectorAll('input')
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
    document.getElementById('consumo').innerHTML = `O seu consumo foi de ${consumo.toFixed(3)} km/l`
}