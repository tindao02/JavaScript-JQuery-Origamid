console.log('SELECIONANDO ELEMENTOS NO DOM');

// $ é o mesmo que JQuery

// ELEMENTO ID
console.log('ELEMENTO ID');

$('#testeId').hide();


// ELEMENTO CLASS
console.log('ELEMENTO CLASS');

$('.testeClass').hide();


// SELECIONAR POR TAG
$('ul li a').hide();

$('ul li a, .segundo').hide();


// SELECIONAR POR ATRIBUTO
$('a[href^="A"').hide();


// SALVAR A SELEÇÃO EM UMA VARIÁVEL
var $paragrafoTerceiro = $('.terceiro');
console.log($paragrafoTerceiro);


// VERIFICAR SE O ELEMENTO EXISTE
if($('.meuId').length)
{
    console.log('meuId existe');
}
else console.log('meuId não existe');

if($('.terceiro').length)
{
    console.log('terceiro existe');
}
else console.log('terceiro não existe');

if($('span').length) console.log('existe span');
else console.log('Não existe span');