// Reduce - Reduzindo o Array
// Excelente para soma de base de dados ou de muitos valores juntos.


// Some todos os números (Reduce)
// Retorne um Array com os pares (Filter)
// Retorne um Array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, /*indice, array*/) {
    if(valor % 2  === 0) {
        /*acumulador.push(valor * 2);*/
        acumulador += valor;
    }
    return acumulador;
}, 0/*[]*/);
console.log(total)

// Exemplo 2 (Mais elaborado
// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const maiorIdade = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maiorIdade);