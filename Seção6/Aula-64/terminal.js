// defineProperty -> Getters e Setters 
// Getters e Setters = Maneira de proteger minhapropriedade 

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true,//Configurável
        get: function() { // Getter ESTÁ EXIBINDO 
            return estoquePrivado;
        },
        set: function(valor) { //Setter VALIDA O VALOR E CONFIGURA
        if (typeof valor !== 'number') {
            throw new TypeError('Mensagem');
        }

        estoquePrivado = valor;
        }
    });
}

function getProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor = valor;
            nome = valor;
        }
    };
}

//const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = '500';
//console.log(p1.estoque);

const p2 = getProduto('Camiseta');
console.log(p2.nome);