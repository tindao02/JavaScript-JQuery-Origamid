console.log('3-15 Document Ready - Data - setTimeout');

// $(document).ready(function(){}); 
// Verifica se o documento está pronto

$(document).ready(function(){
    console.log('Está pronto');
});


// data() pesga o valor dentro de um atributo que começe com data-
console.log($('p').data('height'));


// setTimeout adicionar um tempo de espera antes de executar a função
setTimeout(function(){
    $('.teste02').css('color', '#12385099');
}, 1000);