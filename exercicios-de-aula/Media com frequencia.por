programa {
  funcao inicio() {
    cadeia nome
    real n1, n2, n3, media, frequencia
    escreva("Digite sua nota 1: ")
    leia(n1)
    escreva("Digite sua nota 2: ")
    leia(n2)
    escreva("Digite sua nota 3: ")
    leia(n3)
    escreva("Qual sua frequência? De 0.0 a 10: ")
    leia(frequencia)
    media = (n1 + n2 + n3) / 3
    se (media>=7 e frequencia >=7.5){
      escreva("Sua media foi ", media,". Parabéns, aprovado!")
    } senao {
      escreva("Sua media foi ", media,". Infelizmente, reprovado!")
    }
  }
}
