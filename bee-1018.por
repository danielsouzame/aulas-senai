programa {
  funcao inicio() {
    inteiro valor,cedula,quantidade
    inteiro notas[7] = {100,50,20,10,5,2,1}

    escreva("Qual valor que você quer sacar? ")
    leia(valor)
    escreva(valor,"\n")
      para (inteiro i = 0; i<7;i++){
        cedula = notas[i]
        quantidade = valor / cedula
        escreva(quantidade, " nota(s) de R$ ",cedula, ",00\n")
        valor = valor % cedula
      }
   
  }
}
