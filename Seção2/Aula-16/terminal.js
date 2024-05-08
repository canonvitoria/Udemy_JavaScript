//            012345678910
const nome = 'Luiz Otávio';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Carlos'); //Adiciona no começo
alunos.push('Fabio'); //Adiciona no fim

alunos[0] = 'Eduardo'; // Substituição de elementos
alunos[3] = 'Luiza'; // Adicionar elementos

console.log(alunos.length); //Tamanho do array
console.log(alunos);
console.log(alunos.slice(0, 3));

//console.log(alunos); //Array completo
//console.log(alunos[0]); //indice 0
//console.log(alunos[2]); //indice 2