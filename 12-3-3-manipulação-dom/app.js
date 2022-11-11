console.log('Manipulação DOM');

// Adiciona Texto no fim
$('p').append('(append adiciona no fim)')

// remover de uma variável e adicionar no fim de outras
$('.teste1').append($('.teste2'))

// .html - pega elemento do primeiro e transforma em string
var primeiroSpan = $('p').html();
console.log('.html: ', primeiroSpan);

// Mudar o valor todos os elementos selecionados
// $('p').html('HTML teste')

// .text('<p>Conteúdo</p>') - adiciona p conteúdo, porém não renderiza o HTML dentro dele
// $('p').text('teste text')

// .text - pego todos os valores do elemento selecionado
var text = $('p').text();
console.log(text);