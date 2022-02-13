// Filtrando nomes com a letra A
const nomes = ["Ana", "Joana", "Aarlos", "amanda"];

const nomesComecadosComA = [];
for (let nome of nomes) {
    const inicial = nome[0];
    // console.log(inicial);
    if (inicial === "A" || inicial === "a") {
        //console.log(nome); Como quer criar um novo array, segue;
        nomesComecadosComA.push(nome);
    }
}

console.log(nomesComecadosComA);

