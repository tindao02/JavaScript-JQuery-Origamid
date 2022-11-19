console.log('3-7 Métodos Gerais');

// .attr() pega ou define o valor de um atributo específico

// Pegar valor 
var valorHref = $('.href').attr('href');
console.log('Valor href: ', valorHref);

// atribuir valor
$('.href').attr('href', 'google.com.br');
console.log($('.href').attr('href'));

$('.href02').attr('href', 'teste.com.br');
console.log($('.href02').attr('href'));


// .remoreAttr() remove o atributo
$('.href02').removeAttr('href');
console.log($('.href02').attr('href'));


//.val() pega ou define o valor de um elemento. Utilizado em input, select e textarea.
var valorTeste = $('input.teste01').val();
console.log('Valor teste: ', valorTeste);


// Brincadeira 01
$('.busca-nome').on('click', function(){
    var nome = $('.nome').val();
    console.log('Nome digitado: ', nome);
});


// Remover elemento do dom
$('nomeElemento').remove();

// Remove os filhos do elemento
$('nomePai').empty();