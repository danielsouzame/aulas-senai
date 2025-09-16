// Dias em um Mês: Peça ao usuário para inserir o nome de um mês e, em seguida, determine quantos dias ele tem.
const m31 = ["janeiro", "março", "maio", "julho", "agosto", "outubro", "dezembro"]
const m30 = ["abril", "junho", "setembro", "novembro"]
const fev = "fevereiro"
let mes = String(prompt("Escreva um mês e te digos quantos dias tem."))
mes = mes.toLowerCase() 
if (m31.includes(mes)){
    alert(`${mes.toUpperCase()} tem 31 dias.`)
}else if(m30.includes(mes)){
    alert(`${mes.toUpperCase()} tem 30 dias.`)
}else if (fev.includes(mes)) {
    alert(`${mes.toUpperCase()} tem 28 ou 29 dias em anos bissextos`)
}else {
    alert(`${mes} foi digitado errado, tente novamente.`)
}