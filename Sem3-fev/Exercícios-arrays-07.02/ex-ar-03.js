// Encontre o 10

const numeross = [2, 35, 10, 12, 13];
let respostas = -1

// preciso percorrer o array até achar o 10, retornar o a posição e 
// programa. Caso n tenha, finaliza o programa e retornoa a msg desejada

for (let posicao of numeross) {
    if (posicao === 10) {
        respostas = numeross.indexOf(10)
        break;
    }
}

console.log(respostas)
// console.log(numeros.indexOf(10));


// resposta Cubos

const numeros = [54, 22, 14, 87, 10, 284];

let resposta = -1;
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 10) {
        resposta = i;
        break;
    }
}

console.log(resposta);