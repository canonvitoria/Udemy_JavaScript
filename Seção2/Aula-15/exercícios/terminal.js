let n1 = prompt('Digite um número:');

n1 = Number(n1);
raiz = Math.sqrt(n1);
inteiro = Number.isInteger(n1);

document.body.innerHTML += `<strong>Seu número é ${n1}</strong><br>`;
document.body.innerHTML += `Raiz quadrada: ${raiz} <br>`
document.body.innerHTML += `${n1} é inteiro: ${inteiro}<br>`;
document.body.innerHTML += `é NaN: ${Number.isNaN(n1)}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(n1)}<br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(n1)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${n1.toFixed(2)}`;