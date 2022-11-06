console.log('ARRAYS');

var videoGames = ['Wiiu', 'PS4', 'XBox'];
console.log('Video Games: ', videoGames);

var teste = [1, true, 'Água', 30, 'Vida', false]
console.log(teste);

// EXIBIR POSIÇÃO DEFINIDA
console.log('Posição 3: ', teste[3]);
console.log('Tamanho: ', teste.length);

teste.forEach((e, index) => console.log(`valor da posição ${index + 1}º : `, e));

console.log('UTILIZANDO FOR');
for(i = 0; i <= teste.length-1; i++) 
{
    console.log(`Posição ${i+1}º: ${teste[i]}`);
}


// FUNÇÕES
console.log('FUNÇÕES');

// Adiciona
teste.push('Olá');
console.log(teste);

// Retira
teste.pop(1);
console.log(teste);

// Retornar posição pelo valor ou -1 se não tiver
console.log(teste.indexOf('Água'));

// Remover de qualquer posição
var indiceSerRemovido = 3;
var quantidadeSerRemovido = 2;

console.log('Antes: ', teste);

teste.splice(indiceSerRemovido, quantidadeSerRemovido);
console.log('Depois: ', teste);