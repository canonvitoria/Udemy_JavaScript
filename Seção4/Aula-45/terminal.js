// Closures - Habilidade que a função tem e acessar seu escopo léxico 

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}
const funcao = retornaFuncao('Luiz');
console.dir(funcao);

console.log(funcao());