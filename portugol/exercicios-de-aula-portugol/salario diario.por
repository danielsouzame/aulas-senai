programa {
  funcao inicio() {
    //a
    real salario, salario_diario
    inteiro dias
      escreva("Qual seu salario mensal? ")
      leia(salario)
      escreva("Quantos dias você trabalha por mês? ")
      leia(dias)
      salario_diario = salario / dias
      escreva("Seu salario diario é de: R$ ", salario_diario)

    //b
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
    conta = cafe * 5 + coxinha*5 + halls*2 + docedeleite*10
    escreva("O total da sua compra foi de: R$ ", conta)

    //c
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

    //d
    inteiro vitorias, derrotas, empates, pontos
    escreva("Quantos jogos você venceu? ")
    leia (vitorias)
    escreva("Quantos empates? ")
    leia (empates)
    escreva("E quanstas derrotas? ")
    leia(derrotas)
    pontos = vitorias * 3 + empates
    escreva("A pontuação do seu time foi ", pontos)

    //e
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
    conta = 2 * (cafe * 5) + coxinha*5 + halls*2 + docedeleite*10
    escreva("O total da sua compra foi de: R$ ", conta)

    //f
    real dano, critico
    escreva("Quantos danos criticos seu personagem deu nessa batalha? ")
    leia(dano)
    critico = dano * 1.5
    escreva("A quantidade de dano critico que seu personagem deu foi de ", critico)
    
    //g    
    real dano, bonus,critico
    bonus = 10
    escreva("Quantos danos criticos seu personagem deu nessa batalha? ")
    leia(dano)
    critico = dano * 1.5 + bonus
    escreva("A quantidade de dano critico + o Bonus que seu personagem deu foi de ", critico)

    //h
    real n1,p1,n2,p2,media
    escreva("Qual sua nota 1?")
    leia(n1) 
    escreva("Qual sua nota 2?")
    leia(p1) 
    escreva("Qual sua nota 3?")
    leia(n2) 
    escreva("Qual sua nota 4?")
    leia(p2)  
    media = (n1*p1+n2*p2)/(p1+p2)
    escreva("Sua média ponderada foi ",media)

    //i
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
    escreva("Você poupa R$ ", poupanca, " do seu salario de R$ ", salario) 

    //j
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
    conta = 3* (cafe * 5) + coxinha*5 + halls*2 + 2*(docedeleite*10)
    escreva("O total da sua compra foi de: R$ ", conta)

    //k
    real cafe, alunos, cafe_per_capita
    escreve("Quantos alunos tem na sala hoje? ")
    leia(alunos)
    escreva("Quantos desses alunos estão com café? ")
    leia(cafe)
    cafe_per_capita = cafe/alunos
    escreva("A quantidade de café per capita na sala hoje é: ",cafe_per_capita)
    
    //l
    real cafe, alunos, cafe_per_capita,extra
    escreve("Quantos alunos tem na sala hoje? ")
    leia(alunos)
    escreva("Quantos desses alunos estão com café? ")
    leia(cafe)
    escreva("Quantos destes alunos gostariam de um café extra? ")
    cafe_per_capita = (cafe+extra)/alunos
    escreva("A quantidade de café per capita na sala hoje é: ",cafe_per_capita)
  }
}
