console.log('3-8 Estilo 1');

// .css() pega ou define o valor de uma propriedade CSS

// pegando tamanho da font
var tamanhoFont = $('.teste01').css('font-size');;
console.log('Tamanho font: ', tamanhoFont);

// definindo tamanho da font
$('.teste01').css('font-size', '50px');

// Brincadeira 02
/*
$('.mudarFont').on('click', function(){
    var inputTamanhoFont = $('.tamanhoFont').val();
    var inputCorFont = $('#corFont').val();

    console.log('Ramanho: ', inputCorFont);
    
    $('.textoModelo').css('font-size', `${inputTamanhoFont}px`);
    $('.textoModelo').css('color', `${inputCorFont}`);
})
*/

// Definir multiplos atributos css
$('.mudarFont').on('click', function(){
    var inputTamanhoFont = $('.tamanhoFont').val();
    var inputCorFont = $('#corFont').val();

    $('.textoModelo').css({
        'font-size': inputTamanhoFont + 'px',
        'color': inputCorFont
    })
});


// Tamanho da tela
$(window).height();
$(window).widht();



