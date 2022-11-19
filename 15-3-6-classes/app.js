console.log('Classes');

// .addClass() adicionar uma ou mais classes ao elemento
$('p').addClass('teste01 teste02 testeaux');

console.log($('.teste01'));

// remover classe
$('.teste01').removeClass('teste02');

console.log($('.teste01'));

// adicionar classe quando existir e remover quando não existir
console.log('retira');
$('.testeaux').toggleClass('teste01');
console.log($('.teste01'));
console.log($('.testeaux'));

console.log('bota');
$('.testeaux').toggleClass('teste01');
console.log($('.teste01'));

// .hasClass() verifica se a classe existe e retorna falso ou verdadeiro
var condicao = $('.testeaux').hasClass('teste01');
console.log(condicao);

if(condicao) console.log('Possui a classe teste01');
else console.log('Não possui a classe teste02');