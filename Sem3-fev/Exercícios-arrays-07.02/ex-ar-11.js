// Filtrando números

const original = [5, 7, 14, 16, 26, 192, 349];
let novosNumeros = [];

for (let num of original) {
    if (num <= 20 && num >= 10) {
        novosNumeros.push(num);
    }
}

for (let num of original) {
    if (num > 100) {
        novosNumeros.push(num);
    }
}

console.log(novosNumeros);

// resposta Cubos

const original2 = [5, 7, 13, 17, 26, 34, 118, 245];

let filtrados = [];

for (let numero2 of original2) {
    if ((numero2 >= 10 && numero2 <= 20) || numero2 > 100) {
        filtrados.push(numero2);
    }
}

console.log(filtrados);