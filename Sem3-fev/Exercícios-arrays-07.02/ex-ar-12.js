// Fila do banco

const filaDeDentro = ["Jose", "Maria", "Joao", "Marco"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let limiteMaximo = 5
// limite array filaDeDento = 5
// verificar se filaDeDentro <= 5


while ((filaDeDentro.length) <= (limiteMaximo - 1)) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift(0);
}
console.log(filaDeDentro);
console.log(filaDeFora);