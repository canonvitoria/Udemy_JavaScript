// return = Retorna um valor; termina uma função

function soma(a, b) {
    return a + b;
}
soma(5, 2);

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio'); //OU (é a mesma coisa)

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}; 

console.log(p1);
console.log(p2);

//---------------------------
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 4;
}
function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

// Ao invés de repetir tantas vezes a mesma função, usar o return, está seria e estrução ->

function criaMultiplicador(multiplicador) {
    // multilicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));
