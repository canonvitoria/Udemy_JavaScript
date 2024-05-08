// Validando um CPF - Exercícios

// 705.484.450-52
/*

7x 0x 5x 4x 8x 4x 4x 5x 0x -> CPF
10 9  8  7  6  5  4  3  2  -> Regreção
70 0  40 28 48 20 16 15 0 = 237 -> Resultado de um número do CPF * a casa da regreção, por exemplo 7x10 e o total de todas essas multiplicação

Formula -> 11 - (237 % 11) = 5 -> Primeiro digito gerado (5) (<- se o digito for maior que 9 é 0)


7x 0x 5x 4x 8x 4x 4x 5x 0x 5x -> CPF + 1 digito da conta acima
11 10 9  8  7  6  5  4  3  2  -> Regreção
77 0  45 32 56 24 20 20 0  10 = 285 -> Resultado de um número do CPF * a casa da regreção, por exemplo 7x11 e o total de todas essas multiplicação

Formula = 11 - (284 % 11) = 2  Segundo digito gerado (2) <- se o digito for maior que 9 é 0

705.484.450-52 === 705.484.450-52 -> comparação entre o CPF original e CPG gerado pelos cálculos (válido)

*/ 

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', { //Define uma nova propriedade diretamente em um objeto
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    }); 
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCPF = cpfParcial + digito1 + digito2;
    console.log(novoCPF);
    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
         ac += (regressivo * Number(val));
         regressivo--;
         return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
     const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
     return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');  

if(cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválida');
}