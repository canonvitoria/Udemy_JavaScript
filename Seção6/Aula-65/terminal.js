// Métodos úteis para objetos

// Object.assign = Copia 
// Object.getOwnPropertyDescriptor = Retorna as propriedades
//Object.values = Mostra o valor de uma propriedade
//Object.entries = Mostra o valor de duas ou mais propriedades

//Já vimos:
//Object.keys = retorna as chaves
//Object.freeze = congela o objeto 
//Objeto.defineProperties = define várias propriedades
//Object.defineProperty = define uma propriedade


const produto = {
    nome: 'Produto',
    preco: 1.8
};

 /*const caneca = Object.assign({}, produto, {metrial: 'Porcelana'});
   ...produto,
    material: 'porcelana'

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

Object.defineProperty(produto, 'nome', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));*/

console.log(Object.values(produto));