console.log('3-13 Traversing 1');


// each() - Seleciona cada elemento isoladamente
var i = 0;
$('.teste01').each(function(){
    console.log(i++);
    $(this).on('click', function(){
        $(this).animate({
            fontSize: 50
        }).css('color', 'blue');
    });
});


// closest() seleciona o parent mais próximo do elemento
$('.teste02').on('click', function(){
    $(this).closest('div').css('background', '#12F00099');
});


// parent() - seleciona o pai do elemento
$('.teste03').on('click', function(){
    $(this).parent().css('background', '#1FF0F099');
});

// parent().parent() - seleciona o pai do elemento
$('.teste03').on('click', function(){
    $(this).parent().parent().css('background', '#1FF0F099');
});

// parenta() - seleciona todos os pais
$('.teste04').on('click', function(){
    $(this).parents().css('background', '#1FF0F099');
});


$('.teste04').each(function (indexInArray, valueOfElement) { 
     console.log('indexInArray: ', indexInArray, ' valueOfElement: ', valueOfElement);
});

var parentes = $('.teste04').parents();
console.log(parentes);
console.log('3º parente: ', parentes[3]);

// find() - procura o elemento dentro dos filhos
$('.div-teste').on('click', function(){
    console.log($(this).find('div'));
});