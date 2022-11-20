console.log("Animação 02");

// fadeOut() - anima a opacidade do elemento até 0 e depois aplica dispaly: nome
$('.fadeOut').on('click', function(){
    $('.teste01').fadeOut(2500);
});

// fadeIn
$('.fadeIn').on('click', function(){
    $('.teste01').fadeIn(2500);
});

// Outras formas
//$(selector).hide();
//$(selector).show();

// $(selector).slideUp();
// $(selector).slideDown();


// slideToggle(time) Se tiver sumido aparece, se tiver visível desaparece
$('.SlideToggle').on('click', function(){
    $('.teste03').slideToggle(2500);
});