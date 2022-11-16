console.log('Manipulação DOM outside');

// .after() e .insertAfter() - Adiciona conteúdo após o item selecionado 
$('.teste01').after('<span> .after </span>');
$('.aux').insertAfter('.teste02');
$('.teste02').before('.aux');
$('.teste03').insertBefore('.aux');

// .Wrap() - Envolve conteúdo selecionado
$('p').wrap('<span>x</span>');

// .unwrap() - Remove o elemento pai do item selecionado
$('ul li a').unwrap();