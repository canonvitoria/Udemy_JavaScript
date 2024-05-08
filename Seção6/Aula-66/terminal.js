// Protypes

//JavaScript é baseado em protótipos para propriedades e métodos de um objeto para outro.

//Todos os objetos tem uma refeência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia de protótipos é usada até  topo (null) até econtrar (ou não) tal membro.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função Construtora
const data = new Date(); // <- Date = Função Construtora

console.dir(pessoa1);
console.dir(data);

//Cadeia
// pessoa1 ->> Pessoa.prototype ->> Object.prototype 
