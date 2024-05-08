// Factory function (Função fábrica) 
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor)
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        //Getter 
        get imc() {
            const indice = this.peso / (this. altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = ' Vitória Canon Martins'
console.log(p1.imc);