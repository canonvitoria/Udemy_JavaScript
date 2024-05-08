class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de intância 
    aumentarVolume() {
        this.volume += 2;
    }
    
    diminuirVolume() {
        this.volume -= 2;
    }
    // Método estático
    static trocaPilha() {
        console.log('Ok! Irei trocar')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocaPilha();

console.log(controle1);