// Senha Segura: Peça ao usuário para criar uma senha. Verifique se a senha tem pelo menos 8 caracteres.
let senha
senha = prompt("Crie uma senha com pelo menos 8 digitos: ")

if (senha.length<8){
    alert("Sua senha precisa ter no minimo 8 digitos")
}else{
    alert('Senha gravada com sucesso!')
}