// forEach

const n1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/*for(let valor of a1) {
    console.log(valor);
}*/

let total = 0

n1.forEach(valor => {
    total += valor;
});
console.log(total);