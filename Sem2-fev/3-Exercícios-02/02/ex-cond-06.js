// Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, 
// de acordo com suas alturas, para serem testados para posições específicas. 
// Faça um programa que, dada a altura de um determinado candidato, 
// diga para qual posição ele deverá fazer o teste.

// Caso o jogador tenha menos de 180cm, 
// o programa deve imprimir REPROVADO Caso tenha entre 180cm e 185cm, 
// o programa deve imprimir LÍBERO Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO 
// Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO Caso tenha mais de 205cm, o programa deve imprimir CENTRAL


const alturaJogador = 195;
const alturaCorte = 180;
const altura1 = 186;
const altura2 = 196;
const altura3 = 205;


if (alturaJogador > altura3) {
    console.log("Central");
} else if (alturaJogador >= altura2) {
    console.log("Oposto");
} else if (alturaJogador >= altura1) {
    console.log("Ponteiro");
} else if (alturaJogador >= alturaCorte) {
    console.log("Líbero");
} else {
    console.log("Reprovado");
}