//Escopo léxico
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();