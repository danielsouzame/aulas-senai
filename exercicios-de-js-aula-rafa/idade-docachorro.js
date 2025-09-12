// Idade do Cachorro: Peça ao usuário que insira a idade de seu cachorro e, em seguida, calcule a idade do cachorro em anos humanos (um ano de cachorro equivale a sete anos humanos). Informe se o doguinho já pode se aposentar por idade :D
let idade = parseInt(prompt("Qual a idade do seu cachorro?"))

if(idade*7>=65){
    alert(`Em idade de humano, ele tem ${idade*7} e ja pode se aposentar`)
}else{
    alert(`Em idade de humano, ele tem ${idade*7}, mas ainda não pode se aposentar`)
}