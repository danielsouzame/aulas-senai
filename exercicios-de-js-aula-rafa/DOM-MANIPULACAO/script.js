function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log("resultado");

    let user = document.getElementById("username").value
    if(user == "Vera"){
     resultado.innerHTML = "Login com sucesso"
    }else{
      resultado.innerHTML = "Credenciais incorretas"
    }
}






function mostrarMensagem(){
    alert("Mensagem")
    alert("resto da mensagem")
}

function executarExercicio(){
     // let nome = prompt("Qual o nome? ")
    // alert("Olá " + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome
}