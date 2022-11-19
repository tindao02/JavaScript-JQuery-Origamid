console.log('3-9 Estilo 2');


// .offset() retorna um objeto com as distâncias de top e left do elemento em relação ao documento
var distanciasTeste01 = $('.teste01').offset();
console.log(distanciasTeste01);

console.log('left: ', distanciasTeste01.left, ' top: ', distanciasTeste01.top);


// .scrolTop() - Pega o topo do elemento em relação ao seu scrool (existe também o .scroollLeft)

// brincadeira 03
$('.btn').on('click', function(e){
    e.preventDefault();
    $(window).scrollTop(0);
});