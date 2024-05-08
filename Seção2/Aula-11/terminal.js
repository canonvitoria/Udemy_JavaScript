/* Operadores aritiméticos em JS 
  + Adição / Concatenação
  - Subtração
  / Divisão
  * Multiplicação
  ** Potênciação
  % Resto da divisão
*/

//const num1 = 10;
//const num2 = 3;
console.log(num1 % num2)

//let contador = 1; 
contador++; //adiciona ele e depois soma com ele mesmo
console.log(contador);

/*
contador++ = adiciona ele e depois soma com ele mesmo (Incrementos)
++contador = primeira soma o valor e mostra o total (incremento)

--contador = diminui e mostra o valor (Decremento)
*/

const passo = 1;
let contador = 0;
contador += passo; //contador = contador + 50
console.log(contador)

const num1 = 10;
const num2 = parceInt('5'); //para converter uma string para um numero inteiro
console.log(num1 + num2);