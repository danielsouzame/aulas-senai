// Conversor de Temperatura: Crie um conversor de temperatura que peça ao usuário para inserir uma temperatura em Celsius e, em seguida, converta-a para Fahrenheit.
let temperatura = parseFloat(prompt('Qual temperatura em °C você quer converter para F°?'))
let f = temperatura*1.8 + 32

alert(`${temperatura}°C são equivalentes a ${f}°F`)