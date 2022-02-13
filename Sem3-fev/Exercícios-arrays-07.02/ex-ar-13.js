// Verificando disjuntores

const disjuntores = [true, false, true, false, false, true, false];
let i = 0

for (i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i] === true) // pode tirar tbm o === true
        console.log(i)
}





// resposta

const disjuntores2 = [false, false, true, false, false, true, false, false];

for (let numDisjuntor = 0; numDisjuntor < disjuntores2.length; numDisjuntor++) {
    if (disjuntores2[numDisjuntor]) {
        console.log(numDisjuntor);
    }

}
