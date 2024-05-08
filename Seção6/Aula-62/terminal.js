// Revisando Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//const = chave = 'nome';
console.log(pessoa.nome, pessoa.sobrenome);

///////////////////////////////////////////////////

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

console.log(pessoa1.nome); 

////////////////////////////////////////////////
// Factory Functions / Constructor Functions / Classes 

// Factory Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otavia');
console.log (p1.nomeCompleto());

// Constructor Functions
// Object.freeze() = conngela outros objetos, sendo assim, não podendo ser alterados em qualquer momento
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'Miranda');
pessoa1.nome = 'Vitória';
console.log(pessoa1);