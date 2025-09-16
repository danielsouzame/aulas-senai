programa {
  funcao inicio() {
    inteiro idade
    logico logado = verdadeiro
    // ==, >, <, <=, >=, !=
    escreva("Qual a sua idade? ")
    leia(idade)
    se(idade>=18){
      escreva("Você é de maior! ")
    } se ((idade-18)>10){
      escreva("Você deve renovar sua cnh, pois você ja tem mais de 10 anos de CNH")
    } 
    senao {
      escreva("Você é de menor!")
    }
  }
}
