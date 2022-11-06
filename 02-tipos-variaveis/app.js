console.log('Tipos de variáveis');

var nome = 'Lucas Oliveira';
var idade = 35;
var faculdade = true;
var emprego;

console.log('nome: ', typeof nome);             // string
console.log('idade: ', typeof idade);           // number
console.log('faculdade: ', typeof faculdade);   // boolean
console.log('emprego: ', typeof emprego);       // undefined


// CONCATENAR STRINGS
console.log('CONCATENAR STRINGS');

var nome2 = 'Diego';
var sobrenome2 = 'Almeida';
var nomeConcatenado = nome2 + ' ' + sobrenome2;

console.log(nome2);
console.log(sobrenome2);
console.log(nomeConcatenado);

var numero2 = 1000;
var nomeComNumero = nomeConcatenado + ' é um cara nota ' + numero2;

console.log(nomeComNumero);


// ASPAS DUPLAS E SIMPLES
console.log('ASPAS DUPLAS E SIMPLES');

var simples = 'Nome Simples';
var dupla = 'Nome Duplas';

var frase = simples + ' junto com ' + dupla;

console.log(simples);
console.log(dupla);
console.log(frase);

console.log('Teste1: "dupla"');
console.log("Teste2: 'simples'");

console.log('oi \'vida\'');
console.log("oi \"vida\"");

console.log(`oi 'vida' tudo "bem" ?`);


