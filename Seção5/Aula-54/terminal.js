// Revisão do básico de Arrays
// Arrays são dados por referência

const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

// Aray literal 
// Funciona para Strings, Objetos, Funções, Números...
const pessoas = new Array('Eduardo', 'Maria', 'Joana');
const novo = [...pessoas];

console.log(pessoas);
console.log(novo);

// Fatiamento de Array
const nomes1 = ['Eduardo', 'Maria', 'João', 'Wallace', 'Rosana'];
const novo1 = nomes1.slice(1, 3);
console.log(novo1)

// Conversão de String para Array
const nomeCompleto = 'Luiz Otávio Miranda';
const nomeDivido = nomeCompleto.split(' ');
console.log(nomeDivido);