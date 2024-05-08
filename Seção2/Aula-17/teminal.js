function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);

saudacao('Maria');
saudacao('Felipe');

/////////////////////////////////////////

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

////////////////////////////////////////

function soma(x =1, y =1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2); //se eu não informar nenhume valor em X ou Y retornará 1, pois function soma(x =1, y =1).
console.log(resultado);

//////////////////////////////////////

const raiz  = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

//OU

const raiz = n => n ** 0.5;

console.log(raiz(9));