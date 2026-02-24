// Com base na lista de usuários, escreva um programa que imprima no console uma lista de string com o nome e sobrenome dos usuários.
// Exemplo: [”João Silva”, “Maria Souza”]

const usuarios = [
  {
    nome: 'Melba',
    sobrenome: 'Stein',
    idade: 15,
    temAnimalEstimacao: false,
  },
  {
    nome: 'Donovan',
    sobrenome: 'Barrera',
    idade: 18,
    temAnimalEstimacao: false,
  },
  {
    nome: 'Gross',
    sobrenome: 'Maldonado',
    idade: 25,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Massey',
    sobrenome: 'Waller',
    idade: 16,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Harris',
    sobrenome: 'Bowers',
    idade: 22,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Roberson',
    sobrenome: 'Hancock',
    idade: 30,
    temAnimalEstimacao: false,
  },
];

function usuariosNome(array){
    array.forEach(usuario => {
    console.log(`${usuario.nome} ${usuario.sobrenome}`)
  });
}

usuariosNome(usuarios)