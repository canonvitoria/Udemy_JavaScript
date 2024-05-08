class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log('${this.nome} esstá falando.');
    }
}

const p1 = new Pessoa('Vitória', 'Canon');
console.log(p1);