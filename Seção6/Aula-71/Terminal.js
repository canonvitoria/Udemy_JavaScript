const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    bebendo() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = {...falar, ...comer, ...beber}; //Object.assign({}, falar, comer, beber);


function criaPesssoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},        
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPesssoa('Luiz', 'Otávio');
console.log(p1);

const p2 = criaPesssoa('Maria', 'Júlia');
console.log(p2);


//   Compondo objetos com vários objetos, isso é chamado de composição, essa composição também tem o nome de Mix. Quando usamos "coisas aleatórias", como falar, comer e beber, e joga tudo em um objeto que nao tenha herança/herarquia de objetos.

// Temos alguns padrões, como factory function (descrição), constructor function (descrição), classes, etc.