const pessoa = {
    nome: "Marco",
    altura: 1.72,
    idade: 31,
    temCNH: true,
    apelidos: ["Quinho", "Marquinho", "dwada"]
}

// let textoCNH = "";
// if (textoCNH) {
//    textoCNH = "possui CNH"
// } else {
//    textoCNH = "não possui CNH"
// }

const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH"

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e tem os seguintes apelidos: ${pessoa.apelidos[1]}, ${pessoa.apelidos[0]}`)


// melhorando o exercício


for (let apelido of pessoa.apelidos) {
    console.log(apelido);
}

// ternário

