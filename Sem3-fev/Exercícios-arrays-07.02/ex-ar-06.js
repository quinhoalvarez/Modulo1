// Soma dos pares

const numeros = [2, 4, 7, 9, 10];
let soma = 0
for (i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0) {
        soma = soma + numero;
    }
}
console.log(soma);

