// Object.defineProperty() e Object.defineProperties()
// defineProperty = Define uma propriedade // defineProperties = Define várias propriedades 

function Produto(nome, preco, estoque) {
    /*this.nome = nome;
    this.preco = preco;*/

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false,  // Altera o valor 
        configurable: false // Confuguravel 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true,  // Altera o valor 
            configurable: true // Confuguravel 
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true,  // Altera o valor 
            configurable: true // Confuguravel 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}