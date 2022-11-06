console.log('OPERADORES');

// Adição +
// subtração -
// multiplicação *
// divisão /
// modulo %

var teste1 = 20 + 30;
console.log('teste1: ', teste1);

var teste2 = 20 - 50;
console.log('teste2: ', teste2);

var teste3 = 20 * 10;
console.log('teste3: ', teste3);

var teste4 = 20 / 3;
console.log('test4: ', teste4);

var teste5 = 20 % 3;
console.log('teste5: ', teste5);


// ORDEM DE PRECEDÊNCIA
console.log('ORDEM DE PRECEDÊNCIA');

var teste6 = 10 + 10 * 2 + 20 / 2;
console.log('teste6: ', teste6);

var teste7 = (10 + 10) * (2 + 20) / 2;
console.log('teste7: ', teste7);


// ADICIONA E ATRIBUI VALOR
console.log('ADICIONA E ATRIBUI VALOR');

var y = 10;
console.log('y1: ', y);

y = y + 5;
console.log('y2: ', y);

y += 2;
console.log('y3: ', y);

y -= 5;
console.log('y4: ', y);

y *= 2;
console.log('y5: ', y);

y /= 2;
console.log('y6: ', y);


//INCREMENTO
console.log('INCREMENTO');

y++;
console.log('y7: ', y);

++y;
console.log('y8: ', y);

y--;
console.log('y9: ', y);

--y;
console.log('y10: ', y);

console.log('y11: ', ++y); // primeiro incrementa e depois exibe
console.log('y12: ', y++); // primeiro exibe e depois incrementa


console.log('y13: ', --y);
console.log('y14: ', y--);


// OPERADORES DE COMPRAÇÃO
console.log('OPERADORES DE COMPRAÇÃO');

var t1 = 20 == 20;
var t2 = 20 === 20;
var t3 = 20 == '20';
var t4 = 20 === '20';

var t5 = 20 != 20;
var t6 = 20 !== 20;
var t7 = 20 != '20';
var t8 = 20 !== '20';

console.log('t1: ', t1);
console.log('t2: ', t2);
console.log('t3: ', t3);
console.log('t4: ', t4);
console.log('t5: ', t5);
console.log('t6: ', t6);
console.log('t7: ', t7);
console.log('t8: ', t8);



