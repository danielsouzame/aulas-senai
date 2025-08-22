programa {
  funcao inicio() {
  real c1,c2,c3,c4,c5,ttl,tax,mes
  escreva("Qual valor da corrida 1: ")
  leia(c1)
  escreva("Qual valor da corrida 2: ")
  leia(c2)
  escreva("Qual valor da corrida 3: ")
  leia(c3)
  escreva("Qual valor da corrida 4: ")
  leia(c4)
  escreva("Qual valor da corrida 5: ")
  leia(c5)
  ttl = c1+c2+c3+c4+c5
  tax = ttl - ttl/4
  mes = tax * 20
  escreva("Mano juca, você fez R$ ",ttl," com suas 5 corridas. \nMas após o nosso queridissimo governo pegar a parte dele, você passou a receber R$ ",tax)
  escreva("\nSe você manter esse ritmo até o fim do mês, seu total depois do imposto será: R$ ",mes)
  }
}