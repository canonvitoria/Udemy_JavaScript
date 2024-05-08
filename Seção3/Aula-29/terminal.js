/*let a = 'A' //B
let b = 'B' //C
let c = 'C' //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);*/
// ... rest, ... spread
//               0  1  2  3  4  5  6  7  8  
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, três, ...resto] = numeros;
console.log(um, dois, três);
console.log(resto);