//const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(0 + tresHoras); //01/02/1970 Timestamp unix ou época unix

//const data = new Date(2023, 00, 20, 16, 33); // a, m, d, h, min, seg, ms

const data = new Date (1674243696784);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());
console.log(Date.now());