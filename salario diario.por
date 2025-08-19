programa {
  funcao inicio() {
    real salario, salario_diario
    inteiro dias
      escreva("Qual seu salario mensal? ")
      leia(salario)
      escreva("Quantos dias você trabalha por mês? ")
      leia(dias)
      salario_diario = salario / dias
      escreva("Seu salario diario é de: R$ ", salario_diario)

    inteiro cafe, coxinha, halls, docedeleite
    real conta
    escreva("Quantos cafés você pediu? ")
    leia(cafe)
    escreva("Quantas coxinha você pediu? ")
    leia(coxinha)
    escreva("Quantos halls você comprou? ")
    leia(halls)
    escreva("Quantos doces de leite você comprou? ")
    leia(docedeleite)
    conta = 3 * (cafe * 3.5) + coxinha * 5 + halls * 2 + 2 * (docedeleite * 4)
    escreva("O total da sua compra foi de: R$ ", conta)

    real n1, n2, n3, n4, media
    escreva("Qual foi sua primeira nota? ")
    leia(n1)
    escreva("Qual foi sua segunda nota? ")
    leia(n2)
    escreva("Qual foi sua terceira nota? ")
    leia(n3)
    escreva("Qual foi sua quarta nota? ")
    leia(n4)
    media = (n1 + n2 + n3 + n4)/4
    escreva("Sua média final foi de ", media)  


    inteiro vitorias, derrotas, empates, pontos
    escreva("Quantos jogos você venceu? ")
    leia (vitorias)
    escreva("Quantos empates? ")
    leia (empates)
    escreva("E quanstas derrotas? ")
    leia(derrotas)
    pontos = vitorias * 3 + empates
    escreva("A pontuação do seu time foi ", pontos)


    real dano, bonus
    bonus = 10
    escreva("Quantos danos criticos seu personagem deu nessa batalha? ")
    leia(dano)
    dano = dano * 1.5 + bonus
    escreva("A quantidade de dano critico + o Bonus que seu personagem deu foi de ", dano)


    real soma, poupanca, salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros
    escreva("Qual seu salario mensal? ")
    leia(salario)
    escreva("Quanto vc paga de moradia?")
    leia(moradia)
    escreva("Quanto vc paga de agua?")
    leia(agua)
    escreva("Quanto vc paga de luz?")
    leia(luz)
    escreva("Quanto vc paga de internet?")
    leia(internet)
    escreva("Quanto vc paga de gasolina?")
    leia(gasolina)
    escreva("Quanto vc paga de netflix?")
    leia(netflix)
    escreva("Quanto vc paga de telefone?")
    leia(telefone)
    escreva("Quanto vc paga de outros?")
    leia(outros)
    soma = moradia + agua + luz + internet + gasolina + netflix + telefone + outros
    poupanca = salario - soma
    escreva("Você poupa R$ ", poupanca, " do seu salaro de R$ ", salario) 
  }
}
