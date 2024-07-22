// Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log('Dispositivo ligado');
            return
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log('Dispositivo desligado');
            return
        }
        this.ligado = false;

    }
}

    class Smartphone extends DispositivoEletronico {
        constructor(nome, cor, modelo) {
            super(nome);  
            this.cor = cor;
            this.modelo = modelo;
        }
    }

    const s1 = new Smartphone('iPhone', 'Preto', '11 Pro');
    s1.ligar()
    console.log(s1);