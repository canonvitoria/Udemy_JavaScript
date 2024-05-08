const nome = prompt ('Escreva seu nome completo: ');
const letras = nome.length;
const segundaLetra = nome.charAt(1);
const primeiroIndex = nome.indexOf('a');
const ultimoIndex = nome.lastIndexOf('a');
const tresLetras = nome.slice(-3);
const palavras = nome.split(' ');

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem: ${letras} <br />`;
document.body.innerHTML += `A segunda letra do seu nome: ${segundaLetra} <br />`;
document.body.innerHTML += `Primeiro índice da letra A do seu nome: ${primeiroIndex} <br />`;
document.body.innerHTML += `Último índice da letra A do seu nome: ${ultimoIndex} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome é: ${tresLetras} <br />`;
document.body.innerHTML += `As palavras do seu nome é: ${palavras} <br />`;
document.body.innerHTML += `Seu nome em letras maiúsculas: ${nome.toUpperCase(nome)} <br />`;
document.body.innerHTML += `Seu nome em letras minúsculas: ${nome.toLowerCase(nome)} <br />`;
