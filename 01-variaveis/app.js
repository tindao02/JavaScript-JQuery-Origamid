var nome = 'Joáo Pedro';
var idade = 25;
var possuiFaculdade = true;

console.log(`${nome} de idade ${idade} ${possuiFaculdade ? "possui faculdade" : "não possui faculdade"}`);


// EVITANDO REPETIÇÕES
var x = 25;
var y = 10;
var resultado = (x * x) / y + x;

console.log(resultado % 2 === 0 ? 'O valor é inteiro' : resultado === 87.5 ? 'O valor é 87.5' : 'Não é inteiro');

// CASE SENSITIVE
var NOME = 'NOME1';
var nome = 'nome2';
var Nome = 'Nome3';
var NomE = 'NomE4';

console.log(NOME);
console.log(nome);
console.log(Nome);
console.log(NomE);