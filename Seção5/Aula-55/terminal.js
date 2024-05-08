//Método Splice
//Number.MAX_VALUE = elimina do índice que indicaste ao fim ddo array

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índdice, delete, elem1, elem2, elem3);
// Simular o pop = nomes.splice(-1, 1);
// Simular o Shift = nnomes.splice(0, 1);
// Simular o push = nomes.splice(nomes.length, 0, 'Luiz');
// Simular o unshift = nomes.splice(0, 0, 'Otávio');

const removidos = nomes.splice(-2, Number.MAX_VALUE)   
console.log(nomes, removidos);