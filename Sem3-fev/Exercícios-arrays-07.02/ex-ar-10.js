// Para pensar um pouco mais

const numeros = [8, 12, 4, 10];

let maior = numeros[0];
let menor = numeros[0];

for (let num of numeros) {
    if (num > maior) {
        maior = num;
    }
}
//console.log(maior);

for (let num2 of numeros) {
    if (num2 < menor) {
        menor = num2
    }
}
//console.log(menor);

console.log(maior - menor);



// resposta Cubos

const numeros2 = [8, 11, 4, 1];

let maiorDif = -Number.MAX_VALUE;
for (let x of numeros2) {
    for (let y of numeros2) {
        const difAtual = x - y;
        if (difAtual > maiorDif) {
            maiorDif = difAtual
        }
    }
}

console.log(maiorDif);