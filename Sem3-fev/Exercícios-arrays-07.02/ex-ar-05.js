// Filtrando apenas os pares

const numeros = [2, 7, 6, 24, 10];

for (i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0)
        console.log(numero);
}
