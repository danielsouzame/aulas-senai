// Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 0 a 100 e, em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota.
let nota = Number(prompt("Digite sua nota de 0 a 100:"))

if (nota == 100){
    alert(`Sua nota ${nota} equivale a A`)
}else if (nota > 70){
    alert(`Sua nota ${nota} equivale a B`)
}else if (nota > 50){
    alert(`Sua nota ${nota} equivale a C`)
}else if (nota > 30){
    alert(`Sua nota ${nota} equivale a D`)
}else {
    alert(`Sua nota ${nota} equivale a E`)
}
