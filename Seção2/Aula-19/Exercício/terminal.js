function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form .querySelector('.nome');
        const sobrenome = form .querySelector('.sobrenome');
        const peso = form .querySelector('.peso');
        const altura = form .querySelector('.altura');
        
        pessoas.push = ({
            nome: nome.value,
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value,
        });

        resultado.innerHTML += `<p>${nome.value} foi cadastrado(a) com sucesso!</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();






  /* form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Seu formulário foi enviado!')
    }; */
 
    /* function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }; */
