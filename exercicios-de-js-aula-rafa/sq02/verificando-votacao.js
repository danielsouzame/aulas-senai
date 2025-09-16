// Verificando Votação: Peça ao usuário para inserir sua idade e verifique se ele é elegível para votar (idade mínima de 16 anos).
let idade = parseInt(prompt("Qual sua idade?"))

if (idade >= 16 && idade < 18 || idade >= 65){
    alert(`Você tem ${idade}, e seu voto é facultativo.`)
}else if(idade < 16){
    alert(`Você não precisa votar.`)
}else{
    alert("Voto obrigatorio.")
}