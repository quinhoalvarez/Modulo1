// Duas pessoas estão jogando pedra, papel ou tesoura.
//Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.


const jogada1 = "pedra";
const jogada2 = "papel";

if (jogada1 === jogada2) {
    console.log("empate")
} else
    if ((jogada1 === "pedra" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
        console.log("papel");
    } else
        if ((jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "tesoura")) {
            console.log("tesoura");
        } else {
            console.log("pedra");
        }


