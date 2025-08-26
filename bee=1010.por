programa {
  funcao inicio() {
    inteiro peca1,quantidade1,peca2,quantidade2
    real valor1,valor2,total
    escreva("Codigo da peça: ")
    leia(peca1)
    escreva("quantidade: ")
    leia(quantidade1)
    escreva("valor: ")
    leia(valor1)
    escreva("Codigo da peça: ")
    leia(peca2)
    escreva("Quantidade: ")
    leia(quantidade2)
    escreva("Valor: ")
    leia(valor2)
    total = quantidade1 * valor1 + quantidade2 * valor2
    escreva("VALOR A PAGAR: R$",total)

  }
}
