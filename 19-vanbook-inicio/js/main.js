// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
/*var s = $(window).scrollTop();
console.log('scroolTop:', s);*/

// 2 - Ditância entre o elemento e o topo
/*var acessoTop = $('.acesso').offset().top;
var livrosTop = $('.livros').offset().top;
var resumoTop = $('.resumo').offset().top;
var descontoTop = $('.desconto').offset().top;
var downloadTop = $('.download').offset().top;

console.log('Do acesso Mensal para o topo: ', acessoTop);
console.log('Do livros Mensal para o topo: ', livrosTop);
console.log('Do resumo Mensal para o topo: ', resumoTop);
console.log('Do desconto Mensal para o topo: ', descontoTop);
console.log('Do download Mensal para o topo: ', downloadTop);*/

// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// $(window).scroll(function(){
//     var scroolTop = $(window).scrollTop();
//     //console.log('scroolTop:', scroolTop);

//     var acessoTop = $('.acesso').offset().top;
//     var livrosTop = $('.livros').offset().top;
//     var resumoTop = $('.resumo').offset().top;
//     var descontoTop = $('.desconto').offset().top;
//     var downloadTop = $('.download').offset().top;

//     if(scroolTop >= acessoTop) console.log('Do acesso Mensal para o topo: ', acessoTop);
//     if(scroolTop >= livrosTop) console.log('Do livros Mensal para o topo: ', livrosTop);
//     if(scroolTop >= resumoTop) console.log('Do resumo Mensal para o topo: ', resumoTop);
//     if(scroolTop >= descontoTop) console.log('Do desconto Mensal para o topo: ', descontoTop);
//     if(scroolTop >= downloadTop) console.log('Do download Mensal para o topo: ', downloadTop);
// });

// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// $(window).scroll(function(){
//     var scroolTop = $(this).scrollTop();
//     //console.log('scroolTop:', scroolTop);

//     var acesso = $('.acesso');
//     var livros = $('.livros');
//     var resumo = $('.resumo');
//     var desconto = $('.desconto');
//     var download = $('.download');

//     if(scroolTop >= acesso.offset().top) acesso.addClass('animacaoScroll');
//     if(scroolTop >= livros.offset().top) livros.addClass('animacaoScroll');
//     if(scroolTop >= resumo.offset().top) resumo.addClass('animacaoScroll');
//     if(scroolTop >= desconto.offset().top) desconto.addClass('animacaoScroll');
//     if(scroolTop >= download.offset().top) download.addClass('animacaoScroll');
// });

// 5 - A classe deve mostrar e animar o elemento
$(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    $('.anime').each(function(){
        if(windowTop > $(this).offset().top - 400) $(this).addClass('anime-init');
    });
});