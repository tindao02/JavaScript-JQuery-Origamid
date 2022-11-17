console.log('Eventos Básicos');

// .click() adiciona uma função após o usuário clicar no target
$('.a1').click(function (e) { 
    $('.a1').text('Clicou')
});

// on
$('.a2').on('mouseenter', function(){
    $('.a2').text('Click');
});

$('.a2').on('mousedown', function(){
    $('.a2').text('a2')
});

// this
var a = 1;
$('.a3').on('click', function(e){
    e.preventDefault();
    console.log(e);
    $(this).text(`${a++})`)
})