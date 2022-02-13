// Múltiplos de 3 de 0 a 500
// vai passando no loop, adicionando + 3, e imprimindo até 500

// Fazendo via "arrays"
const numeros = ['']
let i = 0

for (let posicao of numeros) {
    if (posicao <= 500) {
        numeros.push(i);
        i = i + 3;
    }
}
console.log(numeros);


// Resposta correta
let numero = 0;

while (numero < 500) {
    console.log(numero);
    numero += 3;
}