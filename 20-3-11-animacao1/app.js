console.log('3-11 Animação 1');

// .animate() - Anima propriedades CSS para o valor que você definir


$('.bt01').on('click', function(){
    $('.teste01').animate({
        fontSize: 50,
        border: 100,
        width: 200,
        height: 200,
    }, 2500);
});


// Palavras especiais, adição e unidades
$('.teste02').animate({
    height: '+=200',
    opacity: 'toggle',
    fontSize: '2em'
});


// Animação após a outra
$('.bt02').on('click', function(){
    $('.teste03').animate({
        fontSize: 50,
        border: 100,
        width: 200,
        height: 200,
    }, 2500).animate({
        opacity: '10%'
    }, 5000);
});