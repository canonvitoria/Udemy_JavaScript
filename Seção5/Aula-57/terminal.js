// Filter - Filtrando o Array
// Filter (Filtrar), map (Modificar), reduce  (Reduz o valor)
// Filter semmpre retona um Array, com a mesma quantidade de elementos ou menor.

// Retorne os números maiores que 10 
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
//Não retorne TRUE ou FALSE, retorne sempre a condição


//-------------------------------------------------------------------------------

// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com "A".

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Filter retona outro Array com os elementos filtrados, não modifica o Array original
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomeGrande);

const maiorIdade = pessoas.filter(obj => obj.idade >= 50);
console.log(maiorIdade)

const nomeA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeA);