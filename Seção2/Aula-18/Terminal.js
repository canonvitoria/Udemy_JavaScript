//Objeto

const pessoal = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando "OI"`);
    }
};

pessoal.fala();

//Função com objeto

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa1.nome);