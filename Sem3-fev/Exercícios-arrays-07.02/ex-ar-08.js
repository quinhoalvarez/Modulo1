// Encontrando o maior

const numeros = [3, 4, 1, 8, 11, 7, 5];

let maior = numeros[0];

for (let num of numeros) {
    if (num > maior) {
        maior = num;
    }
}
console.log(maior);

// resposta

let maiorAteAgora = numeros[0];
for (let numero of numeros) {
    if (numero > maiorAteAgora) {
        maiorAteAgora = numero;
    }
}
console.log(maiorAteAgora);