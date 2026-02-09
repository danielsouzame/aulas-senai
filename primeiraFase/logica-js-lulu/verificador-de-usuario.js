const prompt = require("prompt-sync")()

const usuario = prompt("Login: ")
const senha = parseInt(prompt("Senha: "))
conversorUsuario = usuario.toLowerCase
if (usuario == "admin" && senha == 12345) {
    console.log("Acesso aprovado!")
} else {
    console.log("Acesso negado!")
}