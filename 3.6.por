programa {
  inclua biblioteca Matematica  

  funcao inicio() {
  inteiro raiz,n
  escreva("Digite um numero: ")
  leia(n)
  raiz = Matematica.raiz(n,2)
  escreva("a raiz de ", n, " é ", raiz, ".E o quadrado é", n*n)
  }
}
