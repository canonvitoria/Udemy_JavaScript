// Função construtora -> Retorna objetos 
//Incio com letra maiúscula (criaPesoa -> Pessoa(new))
// New = Cria um novo objeto vazio, faz o THIS apontar para um objeto que está sendo utilizado

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 12345;
    const metodoInterno = function () {
        
    };
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método!')
    }
}

const p1 = new Pessoa ('Luiz', 'Otávio');
p1.metodo();

// Função fábrica -> Fabrica Objetos