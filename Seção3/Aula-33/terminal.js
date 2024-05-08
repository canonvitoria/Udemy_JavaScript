const frutas = ['Pêra', 'Maça', 'Uva'];

/*for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/

/*for (let indice in frutas) {
    console.log(frutas[indice]);
}*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let keys in pessoa) {
    console.log(keys, pessoa[keys]);
}