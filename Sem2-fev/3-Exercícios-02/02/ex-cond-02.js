// Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a 
// vencedora seja a pessoa que escolheu par e "ímpar" caso a 
// vencedora seja a pessoa que escolheu ímpar.


const jogador1 = 11
const jogador2 = 1
const soma = jogador1 + jogador2


if (soma === 0) {
    console.log("inválido")
} else {
    if (soma % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}



