console.log('FUNÇÕES');

function areaQuadrado(lado)
{
    var area = lado * lado;
    return area;
}
console.log(areaQuadrado(4));

// Print função
console.log(areaQuadrado);

// IMC
function imc(peso, altura) 
{
    return (peso / (altura * altura))
}
console.log(imc(74, 1.75));


// FUNÇÕES ANÔNIMAS
console.log('FUNÇÕES ANÔNIMAS');

var quadrado = function areaQuadrado2(lado)
{
    return lado * lado;
}
console.log('Exibindo a função: ', quadrado);
console.log(quadrado(3));