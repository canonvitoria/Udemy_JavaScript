// Objeto Mapp

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];

// const novasPessoas = {};

// for(const {id, nome} of pessoas) {
//    novasPessoas[id] = {id, nome};
// }

const novasPessoas = new Map();

for(const pessoa of pessoas) {
   const { id } = pessoa;
   novasPessoas.set(id, {...pessoa});
}

// for ( const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);