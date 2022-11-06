console.log('LOOP');

for (var i = 0; i < 10; i++)
{
    console.log(`Feiro i1 ${i+1}ª vez`);
}


// Break
console.log('Break');

for (let i = 0; i < 10; i++) 
{
    console.log(`Feiro ${i+1}ª vez`);
    if(i === 5) 
    {
        console.log(`Feiro i2 ${i+1}ª vez`);
        console.log('break');
        break;
    }
}


// WHILE
console.log('WHILE');

var j = 0;
while(j < 10) 
{
    console.log(`Feiro J ${j+1}ª vez`);
    j++;
}


//DO WHILE
console.log('DO WHILE');

var k = 0;
do
{
    console.log(`Feiro K ${k+1}ª vez`);
    k++;
} while(k < 10)