// Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número 
// dos dois lados, dizemos que essa pedra é uma bucha. Faça um programa que imprima "SIM" 
// caso a pedra seja uma bucha e "NÃO" caso contrário.

const lado1 = 0
const lado2 = 3


if (lado1 === lado2) {
    console.log("bucha");
} else {
    console.log("não");
}
