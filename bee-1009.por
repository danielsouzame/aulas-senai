programa {
  funcao inicio() {
    cadeia nome
    real salario,venda,salariototal
    escreva("Nome: ")
    leia(nome)
    escreva("Salario fixo: ")
    leia(salario)
    escreva("Valor de vendas: ")
    leia(venda)
    salariototal = salario + 15*venda/100 
    escreva(nome,"\nSalario mês:R$",salariototal)


  }
}
