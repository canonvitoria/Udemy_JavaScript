const pessoa = {
    nome: 'Luíz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        Rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação 
const { nome, sobrenome, idade, endereço: {Rua, numero} } = pessoa
console.log(Rua, nome);