// Faça um programa que cria um array de números.


const numeros = [2, 4, 1, 3, 5];
let i = 0;
let soma = 0

while (i < numeros.length) {
    i++
    soma = soma + i
}

console.log(soma)

// 2 forma

const numeros2 = [2, 4, 1, 3, 5];
let somaTotal = 0

for (let indice of numeros2) {
    somaTotal = somaTotal + indice;
}
console.log(somaTotal);
