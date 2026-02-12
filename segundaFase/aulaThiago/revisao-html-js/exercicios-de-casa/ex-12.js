// Escreva uma função que imprima no console o ano atual baseado na "Data Atual” do computador.

function anoAtual(){
    let data = new Date().getFullYear()
    console.log(data)
}

anoAtual()