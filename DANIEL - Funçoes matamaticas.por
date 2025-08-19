programa {
  funcao inteiro soma(inteiro valor1, inteiro valor2){
    retorne valor1 + valor2
  }
  funcao inteiro multiplica(inteiro valor1, inteiro valor2){
    retorne valor1 * valor2
  }
  funcao inteiro divide(inteiro valor1, inteiro valor2){
    retorne valor1 / valor2
  }
  funcao inteiro subtrai(inteiro valor1, inteiro valor2){
    retorne valor1 - valor2
  }
  funcao inteiro resto(inteiro valor1, inteiro valor2){
    retorne valor1 % valor2
  }


  funcao inicio() {
    escreva(soma(5,2))
    escreva("\n", soma(10,8))
    escreva("\nAgora vamos multiplicar\n", multiplica(5,2))
    escreva("\n", multiplica(10,8))
    escreva("\nAgora vamos dividir\n", divide(5,2))
    escreva("\n", divide(10,8))
    escreva("\nAgora vamos subtrair\n", subtrai(5,2))
    escreva("\n", subtrai(10,8))
    escreva("\nAgora vamos ver o resto\n", resto(5,2))
    escreva("\n", resto(10,8))
    
  }
}