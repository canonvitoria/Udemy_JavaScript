/* 

Primitivos (imutávei) - string, number, boolean, underfined, null (bigint, symbol) - Valores copiados

Referência (mutável) - Array, Object, Function - Passados por refência

*/

//Refência 

let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.push(4);

console.log(a, b);

b.pop();
console.log(a, b);