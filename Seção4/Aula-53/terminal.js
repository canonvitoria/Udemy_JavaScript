// Funções geradoras
// Para ver um valor nas Funções geradoras, se usa NEXT. EX: console.log(g1.next())

//Exemplo 1
function* geradora1() {
    // Códdigo qualquer
    yield 'Valor 1';
    // Códdigo qualquer
    yield 'Valor 2';
    // Códdigo qualquer
    yield 'Valor 3';
}

const g1 =  geradora1();

/*console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);*/

// Iterando

for (let valor of g1) {
    console.log(valor)
};


//Exemplo 2
function* geradora2() {
    let i = 0

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);

//Exemplo 3 

function* geradora3() {
    yield 0;
    yield 1; 
    yield 2;
}

//Exemplo 4
function* geradora4() {
   yield* geradora3();
   yield 3;
   yield 4;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

//Exemplo 5

function* geardora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // ...

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geardora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();