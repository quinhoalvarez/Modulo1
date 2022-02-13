// Contando letras

const letras = ["A", "E", "e", "L"];
let qtd = 0

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        qtd++
    }
}

if (qtd > 0) {
    console.log(`Foram encontrados ${qtd} letras E ou e`);
} else {
    console.log("Nenhuma letra E ou e foi encontrada");
}
