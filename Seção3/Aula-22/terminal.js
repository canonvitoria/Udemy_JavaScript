//Qualquer coisa diferente de false, 0, ' ', " ", ` `, null, undefined e NaN será valor True.

console.log('Luiz' && '' && 'Maria');

function falaOi() {
    return'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

