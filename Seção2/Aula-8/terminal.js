const nome = 'Vitória';
const sobrenome = 'Canon Martins';
const idade = 17;
const peso = 50;
const altura = 1.50;

let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura, seu IMC é de ${imc} e nasceu em ${anoNascimento}.`)