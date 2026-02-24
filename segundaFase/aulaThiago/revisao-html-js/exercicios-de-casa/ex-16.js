// Com base na lista de usuários, escreva um programa que imprima no console os usuários maiores de idade com base na legislação brasileira. 

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

function usuariosMaiores(array){
  const maiores = array.filter(usuario => usuario.idade >= 18);

  maiores.forEach(usuario => {
    console.log(`${usuario.nome} ${usuario.sobrenome}, ${usuario.idade} anos`)
  });
}

usuariosMaiores(usuarios)