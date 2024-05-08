/*console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');*/

// i - index
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//Para pular "casas" basta colocar no final i += 10

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}