console.log('OBJETO');

var Pessoa = {
    nome: 'João',
    profissao: 'Pedreiro',
    empresa: 'Autônomo',
    idade: 48,
    curriculo: function () 
    {
        return (`Experiência na construção civil a 10 anos.`)
    }
}

console.log(Pessoa);
console.log(Pessoa.idade);