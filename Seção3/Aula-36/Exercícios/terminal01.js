// Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number).
// Retrone TRUE se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    if (largura >= altura) {
        return 'Paisagem';
    } else return 'Retrato';
}

console.log(ePaisagem(1080, 1920));