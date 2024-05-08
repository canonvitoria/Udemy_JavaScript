//Exercício de NodeList

const paragrafos = document.querySelector('.paragrafos'); //retona um elemento
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;
console.log(backgroudColorBody);

for (let p of ps) {
   p.style.background = backgroudColorBody;
   p.style.color = 'white';
}

