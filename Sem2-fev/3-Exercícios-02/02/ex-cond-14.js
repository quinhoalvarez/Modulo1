// Controle de Consumo de Água Ingerida

const qtdAguaIngerida = 1;

if (qtdAguaIngerida >= 3) {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
} else if (qtdAguaIngerida > 1.5) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!")
}
